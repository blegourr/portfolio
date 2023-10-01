import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Second_layers.css'
import imgMairieIco from '../assets/logo/imgMairieIco.ico'
import logoValiblanca_immo from '../assets/logo/logoValiblanca_immo.svg'
import sonataMusiqueLorient from '../assets/logo/sonataMusiqueLorient.png'

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
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} onClick={() => window.open('https://www.larmor-plage.bzh/webcams-2/')}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={imgMairieIco} alt="logo de la mairie de larmor plage" />
                  <h1>Webcams • Toulhars</h1>
                  <p>En tant que bénévole pour la mairie de Larmor-Plage, j&apos;ai réalisé ma première page web pour partager deux caméras touristiques captivantes avec le grand public.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={logoValiblanca_immo} alt="logo de la page web valiblanca.com" />
                  <h1>Valiblanca_immo</h1>
                  <p>Jusqu&apos;à présent, le projet de la page web Valiblanca_immo se démarque comme mon accomplissement majeur, illustrant ma progression au niveau du back-end.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={sonataMusiqueLorient} alt="logo Sonata musique de Lorient" style={{ borderRadius: '50%' }} />
                  <h1>Sonata Musicale de Lorient</h1>
                  <p>Hé, vous jetez un œil à mon projet &quot;Sonata Musicale de Lorient&quot;. Oui, je sais, ça sonne un peu officiel, mais en réalité, c&apos;est juste mon travail pour les cours de SNT au lycée.</p>
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
