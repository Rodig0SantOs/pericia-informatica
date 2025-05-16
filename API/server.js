/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors({
  origin: ['https://pericia-informatica.vercel.app', 'http://localhost:3000']
}));
app.use(express.json());

// Rota de envio de e-mail
app.post('/api/send-mail', async (req, res) => {
  try {
    const { name, email, assunto, message } = req.body;

    // Formata a mensagem HTML
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Novo contato do formulário</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Assunto:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${assunto}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensagem:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>
      </div>
    `;

    // Dados para a API MailGrid
    const mailData = {
      host_smtp: process.env.MAILGRID_HOST,
      usuario_smtp: process.env.MAILGRID_USER,
      senha_smtp: process.env.MAILGRID_PASSWORD,
      emailRemetente: process.env.MAILGRID_FROM_EMAIL,
      nomeRemetente: `${name} via ${process.env.MAILGRID_FROM_NAME}`,
      emailDestino: process.env.MAILGRID_TO_EMAILS.split(','),
      assunto: `Novo contato: ${assunto}`,
      mensagem: htmlMessage,
      mensagemTipo: "html",
      mensagemEncoding: "quoted-printable",
      mensagemAlt: `Novo contato de ${name} (${email}): ${message}`,
      mensagemAnexos: {}
    };

    // Envia para a API MailGrid
    const response = await fetch(process.env.MAILGRID_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILGRID_TOKEN_AUTH}`
      },
      body: JSON.stringify(mailData)
    });

    if (!response.ok) {
      throw new Error(`Erro na API MailGrid: ${response.statusText}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ error: error.message });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});