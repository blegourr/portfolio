import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import Blegourr from '../../compoments/assets/logo/Blegourr.webp'

function Header() {
  const nav = useNavigate();


  return (
    <div className='containerHeaderElementFixed'>
      {/* Page d'accueil, Mes projets, Mon histoire, Mes réseaux*/}
      <div className='logo'>
        <img src={Blegourr} alt="logo de blegourr" onClick={() => nav("/")} />
      </div>
      <div className='containerButton'>
        <div className='button' onClick={() => nav("/")}>
          <button onClick={() => nav("/")}>Page d'accueil</button>
          <div className="belowButton"></div>
        </div>
        <div className="button" onClick={() => nav("/Projets")}>
          <button onClick={() => nav("/Projets")}>Mes projets</button>
          <div className="belowButton"></div>
        </div>
        <div className="button" onClick={() => nav("/Histoire")}>
          <button onClick={() => nav("/Histoire")}>Mon histoire</button>
          <div className="belowButton"></div>
        </div>
        <div className="button" onClick={() => nav("/Reseaux")}>
          <button onClick={() => nav("/Reseaux")}>Mes réseaux</button>
          <div className="belowButton"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
