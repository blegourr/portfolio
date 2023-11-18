import './Third_layers.css'
import TrayNotif from '../assets/logo/trayNotif.jsx'

function Home() {

  return (
    <div className="containerThirdLayers">
      <div className='title'>
        <h1>Me contacter :</h1>
      </div>
      <div className="containerElement">
        <div>
          <div className='SubContainer'>
            <p>discord :</p>
            <p>Je vous ouvre grand les portes de la communication via Discord, une plateforme propice à nos échanges constructifs. Si vous avez un plan pour un projet web palpitant, une idée qui chatouille votre créativité, ou même si vous souhaitez simplement discuter de quelque chose de plus technologiquement génial qu&apos;une cuillère, je vous invite à faire un clic dans ma direction !</p>
          </div>
          <div className='SubContainer'>
            <TrayNotif />
          </div>
        </div>
        <div>
          <div className='SubContainer'>
            <p>Mail :</p>
            <p>Vous savez, mon email est un peu comme un super-héros du web, toujours prêt à sauver de nouveaux projets de l&apos;oubli numérique ! Si vous avez un plan secret pour un projet web sensationnel, une idée qui brille plus fort que le code lumineux,  n&apox;hésitez pas à me contacter. Mon email est là pour transformer vos idées en réalité digitale, une ligne de code à la fois.</p>
          </div>
          <div className='SubContainer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
