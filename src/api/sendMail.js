// pages/api/sendMail.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.mailgrid.com.br/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    return res.status(response.status).json(result);
  } catch (error) {
    console.error('Erro no proxy MailGrid:', error);
    return res.status(500).json({ message: 'Erro ao enviar e-mail' });
  }
}
