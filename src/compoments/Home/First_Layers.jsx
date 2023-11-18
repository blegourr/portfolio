import { useState } from 'react';

import './First_Layers.css'
import imgBlegourrRonger from '../assets/img/home/imgBlegourrRonger.jpg'
import imgOspm from '../assets/img/home/ospm.webp'
import audioOhhhhNonnn from '../assets/audio/ohhhhhhhhNonnnnnn.mp3'

function Home() {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);

  const handleContextImgBlegourrRonger = (event) => {
    event.preventDefault();
    let audio = new Audio(audioOhhhhNonnn);
    audio.play();

    let element = event.target
    element.classList.add('activeInversion')
      element.addEventListener("animationend", () => {
        element.classList.remove('activeInversion')
      })
  }

  const handleClickImgBlegourrRonger = (event) => {
    event.preventDefault();
    let element = event.target
    element.classList.add('active')
      element.addEventListener("animationend", () => {
        element.classList.remove('active')
      })
  }



  const handleMouseEnter = (index) => {
    setHoveredParagraph(index);
  };

  const handleMouseLeave = () => {
    setHoveredParagraph(null);
  };
      


  return (
    <div className="HomeContainerFirstLayer">
      <div className="container">
        <div className="containerElement">
          {/* <img src={imgBlegourrRonger} alt="Image illustrant le dèvellopement Web" onContextMenu={handleContextImgBlegourrRonger} onClick={handleClickImgBlegourrRonger}/> */}
          {/* <img src={imgBlegourrRonger} alt="Image illustrant l'animation" onContextMenu={handleContextImgBlegourrRonger} onClick={handleClickImgBlegourrRonger}/> */}
          <img 
          src={imgOspm} 
          alt="L'orchestre des pompiers"             
          className={hoveredParagraph === 1 ? 'hovered' : ''}
          />
          <img 
          src={imgBlegourrRonger} 
          alt="Photo de moi dans l'uniforme des pompiers" 
          onContextMenu={handleContextImgBlegourrRonger} 
          onClick={handleClickImgBlegourrRonger}
          className={hoveredParagraph === null ? 'hovered' : ''}
          />

        </div>
        <div className="containerElement">
          <p
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >Au sein de l&apos;Orchestre des Sapeurs-Pompiers du Morbihan (OSPM56), je partage ma passion avec des dizaines de personnes formidables.</p>
          <p
            onMouseEnter={() => handleMouseEnter(null)}
            onMouseLeave={handleMouseLeave}
          >Parallèlement, une autre de mes passions s&apos;inscrit dans le monde dynamique de l&apos;animation, un domaine que j&apos;explore avec enthousiasme en tant que jeune animateur récemment initié.</p>
          <p
            onMouseEnter={() => handleMouseEnter(null)}
            onMouseLeave={handleMouseLeave}
          >Aussi, à mes heures perdues, je me transforme en magicien. Cette alchimie mystérieuse fait naître des moments uniques d&apos;émerveillement.</p>
          <p
            onMouseEnter={() => handleMouseEnter(null)}
            onMouseLeave={handleMouseLeave}
          >Pourtant, au cœur de toutes mes passion; une brille de manière particulière : le développement web. C&apos;est là que je donne vie à mes idées, transformant mes concepts en réalité ligne après ligne, façonnant ainsi mes projets.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
