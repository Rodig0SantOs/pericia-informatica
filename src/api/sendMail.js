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
  await runMiddleware(req, res, cors);
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      host_smtp,
      usuario_smtp,
      senha_smtp,
      emailRemetente,
      nomeRemetente,
      destinatario,
      assunto,
      mensagem,
    } = req.body;

    // Aqui você implementaria o envio real usando Nodemailer, SendGrid, etc.
    console.log("Dados recebidos:", {
      host_smtp,
      usuario_smtp,
      destinatario,
      assunto,
    });

    // Simulando um envio bem-sucedido
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
