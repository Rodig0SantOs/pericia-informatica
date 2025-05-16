/* eslint-disable no-undef */
import Cors from "cors";
import nodemailer from "nodemailer";

// Configura CORS corretamente
const cors = Cors({
  methods: ["POST"],
  origin: ["https://pericia-informatica.vercel.app"], // Sem barra no final
});

async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, email, assunto, message } = req.body;

    // Configura o transporter com credenciais do .env (NÃO use NEXT_PUBLIC_)
    const transporter = nodemailer.createTransport({
      host: process.env.MAILGRID_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILGRID_USER,
        pass: process.env.MAILGRID_PASSWORD,
      },
    });

    // Envia o e-mail
    await transporter.sendMail({
      from: `"${process.env.MAILGRID_FROM_NAME}" <${process.env.MAILGRID_FROM_EMAIL}>`,
      to: process.env.MAILGRID_TO_EMAIL, // Definir no .env
      subject: `Novo contato: ${assunto}`,
      html: `
        <h2>Novo contato de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return res.status(500).json({ error: "Falha ao enviar e-mail" });
  }
}
