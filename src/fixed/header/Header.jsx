import { useNavigate } from 'react-router-dom';
import './Header.css'
import Blegourr from '../../compoments/assets/logo/Blegourr.webp'
import { useRef } from 'react';

function Header() {
  const nav = useNavigate();

  // détecte quand l'utilisateur scroll si supèrieur à 0 ajouter la class scroll
  const refBackground = useRef(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
  }; 

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return (() => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));

    })
  }, []);


  return (
    <header>
      <div className='containerHeaderElementFixed scroll'>
        {/* Page d'accueil, Mes projets, Mon histoire, Mes réseaux*/}
        <div className='background'></div>
        <div className="container">
          <div className='logo'>
            <img src={Blegourr} alt="logo de blegourr" onClick={() => nav("/")} />
          </div>
          <div className='containerButton'>
            <div className='button' onClick={() => nav("/")}>
              <button onClick={() => nav("/")}>Page d&apos;accueil</button>
              <div className="belowButton"></div>
            </div>
            <div className="button" onClick={() => nav("/Projets")}>
              <button onClick={() => nav("/Projets")}>Mes projets</button>
              <div className="belowButton"></div>
            </div>
            <div className="button" onClick={() => nav("/Reseaux")}>
              <button onClick={() => nav("/Reseaux")}>Mes réseaux</button>
              <div className="belowButton"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
