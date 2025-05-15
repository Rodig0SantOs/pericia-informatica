const CardOverview = ({ titulo, descricao }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full my-2">
      <h2 className="text-2xl font-semibold text-subtitle-emphasis">
        {titulo}
      </h2>
      <p className="text-text-primary mt-2">{descricao}</p>
    </div>
  );
};

export default CardOverview;
