import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Second_layers.css'
import imgMairieIco from '../assets/logo/imgMairieIco.ico'
import logoValiblanca_immo from '../assets/logo/logoValiblanca_immo.svg'
import logoPorfolio from '../assets/logo/BlegourrPortfolio.png'
import sonataMusiqueLorient from '../assets/logo/sonataMusiqueLorient.png'
import BlegourrBot from '../assets/logo/BlegourrBot.png'
import COCO_HEBERGE from '../assets/logo/COCO_HEBERGE.svg'
import Blegourr from '../assets/logo/Blegourr.webp'
import ndc from '../assets/logo/ndc.png'

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

        let angleY = -(x - middelCardWidth) / 110
        let angleX = (y - middelCardHeight) / 110

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
            <div className="card vertical-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} onClick={() => window.open('https://www.larmor-plage.bzh/webcams-2/')}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={imgMairieIco} alt="logo de la mairie de larmor plage" />
                  <div className="h1contairer">
                    <h1>Webcams • Toulhars</h1>
                  </div>
                  <p>En tant que bénévole pour la mairie de Larmor-Plage, j&apos;ai réalisé ma première page web pour partager deux caméras touristiques captivantes avec le grand public.</p>
                </div>
              </div>
            </div>
            <div className="card horizontal-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={logoValiblanca_immo} alt="logo Valiblanca_immo" />
                  <div className="h1contairer">
                    <h1>Valiblanca_immo</h1>
                  </div>
                  <p>Jusqu&apos;à présent, le projet de la page web Valiblanca_immo se démarque comme mon accomplissement majeur, illustrant ma progression au niveau du back-end.</p>
                </div>
              </div>
            </div>
            <div className="card horizontal-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={logoPorfolio} alt="logo de la mairie de larmor plage" style={{ borderRadius: '50%' }} />
                  <div className="h1contairer">
                    <h1>Porfolio</h1>
                  </div>
                  <p>Mon portfolio actuel est l&apos;un de mes plus gros projets de développement front-end. C&apos;est comme mon terrain de jeu virtuel pour montrer mon travail. Profitez de votre visite !</p>
                </div>
              </div>
            </div>
            <div className="card horizontal-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={BlegourrBot} alt="logo blegourrBot" style={{ borderRadius: '50%' }}/>
                  <div className="h1contairer">
                    <h1>Blegourr</h1>
                  </div>
                  <p>Laissez-moi vous présenter Blegourr, un projet personnel qui prend vie sous la forme d&apos;un bot Discord.</p>
                </div>
              </div>
            </div>
            <div className="card vertical-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={sonataMusiqueLorient} alt="logo Sonata musique de Lorient" style={{ borderRadius: '50%' }}/>
                  <div className="h1contairer">
                    <h1>Sonata Musicale de Lorient</h1>
                  </div>
                  <p>Hé, vous jetez un œil à mon projet &quot;Sonata Musicale de Lorient&quot;. Oui, je sais, ça sonne un peu officiel, mais en réalité, c&apos;est juste mon travail pour les cours de SNT au lycée.</p>
                </div>
              </div>
            </div>
            <div className="card vertical-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={COCO_HEBERGE} alt="logo du site Coco-heberge" />
                  <div className="h1contairer">
                    <h1>Coco_Heberge</h1>
                  </div>
                  <p>Coco_heberge : un projet à trois visant à simplifier l&apos;hébergement de serveurs. Bien qu&apos;oublié, il demeure un accomplissement pour notre travail d&apos;équipe.</p>
                </div>
              </div>
            </div>
            <div className="card vertical-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }} onClick={() => nav("/Mayocompagnie_bank")}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={Blegourr} alt="logo Blegourr pour un data pack minecraft" style={{ borderRadius: '50%' }}/>
                  <div className="h1contairer">
                    <h1>Mayocompagnie_bank</h1>
                  </div>
                  <p>Mayocompagnie_bank : mon data pack Minecraft créé spécialement pour un serveur d&apos;été entre amis du lycée. Bien qu&apos;il s&apos;agisse d&apos;un petit projet, il reste un grand souvenir de notre aventure partagée.</p>
                </div>
              </div>
            </div>
            <div className="card vertical-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                  <img src={ndc} alt="logo de la mairie de larmor plage" />
                  <div className="h1contairer">
                    <h1>Nuit du c0de</h1>
                  </div>
                  <p>Grâce à l&apos;événement &apos;Nuit du c0de&apos;, nous avons eu l&apos;opportunité de créer notre petit jeux. Bien que peu jouable, cette expérience a inspiré la création d&apos;un petit jeu pixelisé en collaboration avec deux de mes amis.</p>
                </div>
              </div>
            </div>
            <div className="card horizontal-card">
              <div className="content-card" style={{ transform: "rotateX(0deg) rotateY(0deg)" }}>
                <div className="bg-animate"></div>
                <div className="containerElementInCard">
                <img src={Blegourr} alt="logo Blegourr pour le escapeganme pour le secours pop" style={{ borderRadius: '50%' }}/>
                  <div className="h1contairer">
                    <h1>Escape game</h1>
                  </div>
                  <p>Plongez au cœur d&apos;une énigme musicale crée lors de notre escape game axé sur la liberté culturelle. Dans le cadre d&apos;une colonie de vacances avec l&apos;association &quot;Secours Populaire&quot;.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='seeMore'>
            <div className="button" onClick={() => nav("/Projets")}>
              <button onClick={() => nav("/Projets")}>{"Voir plus de projets ->"}</button>
              <div className="belowButton"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
