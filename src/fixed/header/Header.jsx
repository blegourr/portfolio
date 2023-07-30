import { useState } from 'react'
import './Header.css'
import Blegourr from '../../compoments/assets/logo/Blegourr.webp'

function Header() {

  return (
    <div className='containerHeaderElementFixed'>
      {/* Page d'accueil, Mes projets, Mon histoire, Mes réseaux*/}
      <div className='logo'>
        <img src={Blegourr} alt="" />
      </div>
      <div className='containerButton'>
        <div className='button'>
          <button>Page d'accueil</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button>Mes projets</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button>Mon histoire</button>
          <div className="belowButton"></div>
        </div>
        <div className="button">
          <button>Mes réseaux</button>
          <div className="belowButton"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
