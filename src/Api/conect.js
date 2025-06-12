/* eslint-disable no-undef */
// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/send-email", async (req, res) => {
  const formData = req.body;

  const htmlMessage = `
    <div>
      <h2>Novo contato do formulário</h2>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Assunto:</strong> ${formData.assunto}</p>
      <p><strong>Mensagem:</strong> ${formData.message}</p>
    </div>
  `;

  const requestData = {
    host_smtp: process.env.MAILGRID_HOST,
    usuario_smtp: process.env.MAILGRID_USER,
    senha_smtp: process.env.MAILGRID_PASSWORD,
    emailRemetente: process.env.MAILGRID_FROM_EMAIL,
    nomeRemetente: process.env.MAILGRID_FROM_NAME,
    destinatario: [process.env.MAILGRID_TO_EMAIL],
    assunto: `Novo contato: ${formData.assunto}`,
    token: process.env.MAILGRID_AUTHORIZATION,
    mensagem: htmlMessage,
    mensagemAlt: `Contato de ${formData.name} (${formData.email})`,
    mensagemTipo: "html",
    mensagemEncoding: "quoted-printable",
    mensagemAnexos: {},
  };

  try {
    const response = await fetch("https://api.mailgrid.net.br/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro interno ao enviar o e-mail" });
  }
});

module.exports = router;
