/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Cors from "cors";

const cors = Cors({
  methods: ["POST"],
  origin: ["https://seu-frontend.com"], // Substitua pelo seu domínio
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, email, assunto, message } = req.body;

    // Configurações pegas do .env (sem NEXT_PUBLIC_)
    const transport = {
      host: process.env.MAILGRID_HOST,
      auth: {
        user: process.env.MAILGRID_USER,
        pass: process.env.MAILGRID_PASSWORD,
      },
    };

    // Aqui implementaria o envio real com Nodemailer
    console.log("Enviando email:", { name, email });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
