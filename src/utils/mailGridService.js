const mailGridService = async (formData) => {
  /* verificar se as variáveis necessárias estão definidas */
  if (
    !import.meta.env.VITE_MAILGRID_USER ||
    !import.meta.env.VITE_MAILGRID_PASSWORD ||
    !import.meta.env.VITE_MAILGRID_AUTHORIZATION
  ) {
    throw new Error("Configurações de e-mail não estão definidas corretamente");
  }

  const htmlMessage = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Novo contato do formulário</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Assunto:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.assunto}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensagem:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formData.message}</td>
        </tr>
      </table>
    </div>
  `;

  const requestData = {
    host_smtp: import.meta.env.NEXT_PUBLIC_MAILGRID_HOST,
    usuario_smtp: import.meta.env.NEXT_PUBLIC_MAILGRID_USER,
    senha_smtp: import.meta.env.NEXT_PUBLIC_MAILGRID_PASSWORD,
    emailRemetente: import.meta.env.NEXT_PUBLIC_MAILGRID_FROM_EMAIL,
    nomeRemetente: import.meta.env.NEXT_PUBLIC_MAILGRID_FROM_NAME,
    destinatario: import.meta.env.NEXT_PUBLIC_MAILGRID_FROM_EMAIL,
    assunto: `Novo contato: ${formData.assunto}`,
    token: import.meta.env.NEXT_PUBLIC_MAILGRID_AUTHORIZATION,
    mensagem: htmlMessage,
    mensagemAlt: `Novo contato de ${formData.name} (${formData.email}): ${formData.message}`,
    mensagemTipo: "html",
    mensagemEncoding: "quoted-printable",
    mensagemAnexos: {},
  };

  try {
    const response = await fetch(
      "https://stwbrasil.com/api/sendMail", // URL completo
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Erro detalhado da API:", errorData);
      throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro detalhado:", error);
    throw new Error(`Falha ao enviar e-mail: ${error.message}`);
  }
};

export default mailGridService;
