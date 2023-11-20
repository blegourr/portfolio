import { useNavigate } from 'react-router-dom';
import './Header.css'
import Blegourr from '../../compoments/assets/logo/Blegourr.webp'

function Header() {
  const nav = useNavigate();


  return (
    <header>
      <div className='containerHeaderElementFixed scroll'>
        {/* Page d'accueil, Mes projets, Mon histoire, Mes réseaux*/}
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
        <div className='background'></div>
      </div>
    </header>
  )
}

export default Header
