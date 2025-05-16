/* eslint-disable no-undef */
import Cors from "cors";
import nodemailer from "nodemailer";

// Configuração correta do CORS
const cors = Cors({
  methods: ["POST", "OPTIONS"], // Adicione OPTIONS para preflight
  origin: [
    "https://pericia-informatica.vercel.app",
    "http://localhost:3000", // Para desenvolvimento
  ],
});

export default async function handler(req, res) {
  // Executa o middleware CORS
  await new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

  // Responde imediatamente para requisições OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Verifica o método
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, assunto, message } = req.body;

    // Configure seu transporter de e-mail
    const transporter = nodemailer.createTransport({
      host: process.env.MAILGRID_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILGRID_USER,
        pass: process.env.MAILGRID_PASSWORD,
      },
    });

    // Envie o e-mail
    await transporter.sendMail({
      from: `"${name}" <${process.env.MAILGRID_FROM_EMAIL}>`,
      to: process.env.MAILGRID_TO_EMAIL,
      subject: assunto,
      html: `
        <h2>Novo contato de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro no envio:", error);
    return res.status(500).json({ error: "Erro ao enviar mensagem" });
  }
}
