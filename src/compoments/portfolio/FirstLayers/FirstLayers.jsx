import PortfolioItem from './Mirroir'
import './FirstLayers.css'

function portfolioFirstLayers() {
  const portfolioCount = 1;
  const initialDepth = 35;

  return (
    <div className='portfolioFirstLayers'>
      {/* Boucle pour afficher plusieurs fois le portfolio initial */}
      {Array.from({ length: portfolioCount }, (_, index) => (
        <PortfolioItem key={index} depth={initialDepth}/>
      ))}
      
      {/* Rajoute le pupup dissant que l'on regarde déjà se site */}
      <div className="popup">
        <h1>Qu&apos;est-il en train de se passer ici ?</h1>
        <p>Vous voilà dans une situation un peu particulière. En ce moment, vous êtes sur la page &quot;Projets Portfolio&quot;, mais il se trouve que vous avez atterri dans une espèce de boucle infinie !</p>
        <span></span>
        <p>Étant donné que vous utilisez déjà le projet, je vais vous laisser le découvrir par vous-même.</p>
      </div>

    </div>
  );
}

export default portfolioFirstLayers
