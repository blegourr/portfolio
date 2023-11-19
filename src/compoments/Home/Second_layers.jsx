import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Second_layers.css'
import blegourrPortfolio from '../assets/logo/BlegourrPortfolio.webp'
import blegourr from '../assets/logo/Blegourr.webp'
import bonbon from '../assets/logo/bonbon.webp'

function Home() {
  const nav = useNavigate();

  useEffect(() => {
    const card = document.querySelectorAll(".card")
    card.forEach(element => {
      element.addEventListener('mousemove', e => {
        let elementRect = element.getBoundingClientRect()

        let x = e.clientX - elementRect.x
        let y = e.clientY - elementRect.y

        let middelCardWidth = elementRect.width / 2
        let middelCardHeight = elementRect.height / 2

        let angleY = -(x - middelCardWidth) / 180
        let angleX = (y - middelCardHeight) / 180

        element.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`

        const bgCard = element.querySelector(".bg-animate")
        bgCard.style.transform = `translateX(${(x - middelCardWidth)}px) translateY(${(y - middelCardHeight)}px)`

      })

      element.addEventListener('mouseleave', () => {
        element.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`
      })
    })
  }, [])


  return (
    <div className="containerSecondLayer">
      <div className='skew'>
        <div className='containerAbsolute'>
          <div className="title">
            <h1>Mes Projets :</h1>
          </div>
          <div className='containerCard'>
            <div className="card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} onClick={() => nav('/Portfolio')}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={blegourrPortfolio} alt="logo de la mairie de larmor plage" />
                  <h1>Portfolio</h1>
                  <p>Mon portfolio actuel est l&apos;un de mes plus gros projets de développement front-end. C&apos;est comme mon terrain de jeu virtuel pour montrer mon travail. Profitez de votre visite !</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} onClick={() => nav('/Mayocompagnie_bank')}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={blegourr} alt="logo de la page web valiblanca.com" />
                  <h1>Mayocompagnie_bank</h1>
                  <p>Mayocompagnie_bank : mon data pack Minecraft créé spécialement pour un serveur d&apos;été entre amis du lycée. Bien qu&apos;il s&apos;agisse d&apos;un petit projet, il reste un grand souvenir de notre aventure partagée.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} >
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={bonbon} alt="logo Sonata musique de Lorient" />
                  <h1>Maître des Bonbons</h1>
                  <p>Jetez un coup d&apos;œil à mon dernier projet d&apos;escape game. Trois joueurs, trois rôles: Zero, l&apos;agent du FBI et le Maître des Bonbons. Chacun a ses propres défis, synchronisez-vous pour réussir. Une plongée dans le monde de la sécurité web et des mystères numériques.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='seeMore'>
            <div className="button" onClick={() => nav("/Projets")}>
              <button onClick={() => nav("/Projets")}>{"Voir plus de projets ->"}</button>
              <div className="belowButton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
