import PortfolioItem from './Mirroir'

function portfolioFirstLayers() {
  const portfolioCount = 1;
  const initialDepth = 15; // Spécifiez la profondeur initiale du portfolio emboîté

  return (
    <div>
      {/* Boucle pour afficher plusieurs fois le portfolio initial */}
      {Array.from({ length: portfolioCount }, (_, index) => (
        <PortfolioItem key={index} depth={initialDepth} />
      ))}
    </div>
  );
}

export default portfolioFirstLayers
