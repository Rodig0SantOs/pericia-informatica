export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email, assunto, mensagem } = req.body;

    // Aqui vai o envio de e-mail com Mailgrid ou qualquer lib
    console.log("Enviando e-mail:", nome, email, assunto, mensagem);

    return res.status(200).json({ success: true });
  }

  // Se não for POST, retorna 405
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
