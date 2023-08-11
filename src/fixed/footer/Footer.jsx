import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const nav = useNavigate();

  return (
    <div className='footer'>
      <div className="top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Calque_1"
          x="0px"
          y="0px"
          viewBox="0 0 1300 550"
          style={{ enableBackground: 'new 0 0 1300 550' }}
          xmlSpace="preserve"
        >
          <style type="text/css">
            {`.st1{opacity:0.6;fill:#373737;enable-background:new;}`}
          </style>
          <path
            className="st1"
            d="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
          >
            <animate
              attributeName="d"
              dur="5s"
              begin="1s"
              values="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
              repeatCount="indefinite"
            />
          </path>

          <path
            className="st1"
            d="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
          >
            <animate
              attributeName="d"
              dur="5s"
              values="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
              repeatCount="indefinite"
            />
          </path>

          <path
            className="st1"
            d="M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250"
          >
            <animate
              attributeName="d"
              dur="5s"
              begin="2s"
              values="M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250"
              repeatCount="indefinite"
            />
          </path>

          <path
            className="st1"
            d="M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250"
          >
            <animate
              attributeName="d"
              dur="5s"
              values="M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
                M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
				M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      <div className="containerElement">
        <div className="element">
          <div className="contact subElement">
            <div className="title">
              <p>Nous Contacter</p>
            </div>
            <a aria-label="contact mail" href="mailto:contact@blegourr.fr">contact@blegourr.fr</a>
            <a href="https://discord.gg/9uWBQBnnf8">Rejoignez notre Discord</a>
          </div>
          <div className="mentionsLegal subElement">
            <div className="title">
              <p>Liens utiles</p>
            </div>
            <div className="button">
              <button onClick={() => nav("/Mentions_legales")}>Mentions légales</button>
              <div className="belowButton"></div>
            </div>
          </div>
        </div>
        <div className="element">
          <div className="copyright subElement">
            <span>Copyright © 2023 Blegourr All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
