const mailGridService = async (formData) => {
  try {
    const response = await fetch("https://api.mailgrid.net.br/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar:", error);
    throw new Error(`Falha ao enviar e-mail: ${error.message}`);
  }
};

export default mailGridService;
