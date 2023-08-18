import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Second_layers.css'
import minecraftContrer from '../assets/img/minecraftContrer.webp'
import minecraftSalleCoffre from '../assets/img/minecraftSalleCoffre.webp'
import minecraftSpawn from '../assets/img/minecraftSpawn.webp'
import minecraftSpawn2 from '../assets/img/minecraftSpawn2.webp'
import minecraftAncienServ from '../assets/img/MinecraftAncienServ.webp'
import minecraftMarcher from '../assets/img/minecraftMarcher.webp'
import minecraftMarcherNoir from '../assets/img/minecraftMarcherNoir.webp'
import minecraftDataPack from '../assets/img/minecraftDataPack.webp'

function Home() {
  const nav = useNavigate();

  useEffect(() => {
    const elements = [
      document.getElementById('minecraftSpawn'),
      document.getElementById('MinecraftAncienServ'),
      document.getElementById('minecraftDataPack'),
      document.getElementById('minecraftContrer'),
      document.getElementById('minecraftSpawn2'),
      document.getElementById('minecraftMarcher'),
      document.getElementById('minecraftMarcherNoir'),
      document.getElementById('minecraftSalleCoffre')
    ];

    window.addEventListener('scroll', () => {
      // Hauteur totale de la page
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      elements.forEach(element => {
        // Position verticale de l'élément par rapport au bas de la fenêtre
        const elementBottom = document.documentElement.clientHeight - element.getBoundingClientRect().bottom;

        // Calculez le pourcentage inversé
        const invertedPercentage = ((elementBottom / totalHeight) * 100);

        if (invertedPercentage >= 0) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    });
  }, []);

  return (
    <div className="containerSecondLayer">
      <div className='skew'>
        <div className='containerAbsolute'>
          <div className="containerZone">
            <div className='containerParagraphe'>
              <h1>Le but du serveur :</h1>
              <div className='containerText'>
                <img src={minecraftSpawn} alt="image du spawn du serveur" id="minecraftSpawn" />
                <p>Alors voilà, on s'est mis à travailler sur un serveur Minecraft, avec une ambiance semi-RP qui te donne une totale liberté. Si t'as pas le courage d'aller miner à fond ou d'affronter le Warden, ne t'inquiète pas, Nous avons le plan B : tu peux tout simplement acheter les ressources pour te la jouer pro du build. On a trouvé comment doser entre faire ce que tu kiffes et donner un coup de main à tout le monde. Que tu sois un pro de la culture de carottes, un artiste du bâtiment ou un crack du troc, c'est un peu ton terrain de jeu. c'est un mélange de gameplay et de fun dans l'univers Minecraft, comme si on avait mixé des ingrédients uniques pour concocter quelque chose d'exceptionnel.</p>
              </div>
            </div>
          </div>
          <div className="containerZone">
            <div className='containerParagraphe'>
              <h1>L'idée de la création du serveur :</h1>
              <div className='containerText reverse'>
                <img src={minecraftAncienServ} alt="une image de notre ancien serveur" id="MinecraftAncienServ" />
                <p>L'idée de monter ce serveur découle de notre tradition estivale, où chaque été, on se lance dans la création d'un nouveau serveur Minecraft entre amis. Cette fois, on voulait vraiment que ça déchire. Nous avons donc pris notre serveur de l'été précédent, et nous avons passé en revue tous les petits pépins et soucis qui étaient apparus. Là, nous nous somme dit : "Pourquoi pas régler tout ça et faire quelque chose de génial pour cette année ?" C'est comme ça qu'est né l'idée de notre serveur actuel. L'objectif était de créer un espace où chacun pourrait laisser libre cours à sa créativité, à sa manière. Imagine : un coup tu t'éclates en survie, un coup tu te lâches en build. Le mélange parfait, quoi ! Et voilà, c'était parti pour une aventure encore plus folle et excitante que jamais ! A l'année prochaine les amis !</p>
              </div>
            </div>
          </div>
          <div className="containerZone">
            <div className='containerParagraphe'>
              <h1>La place du datapack dans le serveur :</h1>
              <div className='containerText'>
                <img src={minecraftDataPack} alt="une immage mettant en scène l'uilisation de notre système d'économie" id="minecraftDataPack" />
                <p>La place du datapack dans notre serveur, c'est un peu comme le chef d'orchestre derrière les coulisses. Il assure la gestion de notre système d'économie avec notre monnaie super stylée (qui, entre nous, claque bien). Il veille à ce que chaque transaction et chaque échange se déroulent sans accroc (enfin, pas vraiment, mais bon, il faut pas dire). Mais attends, ce n'est pas tout ! Il est aussi le héros quand il s'agit de découvrir de nouvelles zones. Tu sais, quand tu te balades et que tout à coup, tu tombes sur un coin de carte secret ? Une partie de ça, c'est grâce à lui ! En prime, il accueille les nouveaux joueurs avec des ressources de départ pour qu'ils se sentent comme chez eux. En gros, c'est le génie caché derrière tout ça, pour que moi et mes amis passions un max de bons moments sur notre serveur Minecraft.</p>
              </div>
            </div>
          </div>
          <div className="containerZone">
            <div className='containerParagraphe'>
              <h1>Les zones créées :</h1>
              <div className='containerText reverse'>
                <img src={minecraftContrer} alt="image montrant une plaine avec des fleures" id="minecraftContrer" />
                <p>Les zones créées sont un peu comme les chapitres d'un livre qu'on écrit ensemble. Chacune raconte une histoire unique et te plonge dans un univers captivant. On a conçu ces zones avec amour et créativité, en les pensant comme des terrains de jeu où chaque recoin réserve des surprises.</p>
              </div>

              <div className='containerText'>
                <img src={minecraftSpawn2} alt="une image montrant le spawn du serveur" id="minecraftSpawn2" />
                <p>Notre spawn, c'est comme le cœur battant de notre serveur, et on l'a créé en prenant toutes les petites features ajoutées lors de la dernière mise à jour de Minecraft. C'est ici que tout commence. Là où tu peux échanger avec le mythique Harnak qu'elle que pièces de money (et oui, c'est avec lui on obtient de la money, mais faut pas s'attendre à devenir riche du jour au lendemain). C'est un peu comme le hub central où tu peux te préparer pour l'aventure qui t'attend. C'est le point de rencontre, d'échange et de découvertes.</p>
              </div>

              <div className='containerText reverse'>
                <img src={minecraftMarcher} alt="une image montrant le marcher du serveur" id="minecraftMarcher" />
                <p>Ensuite, y a la "Marcher". C'est là que les vrais affaires se passent. Un endroit où les joueurs peuvent échanger entre eux via leurs commerces. T'as compris, c'est comme une place de marché, mais version Minecraft. Des stands, des boutiques, des coins où les échanges vont bon train. Mais attends, ce n'est pas tout, pour te rendre encore plus riche, on a pas mal de PNJ spéciaux qui ajoutent une touche de piquant à tout ça. Donc, que tu sois un maître du commerce ou un simple acheteur impulsif, c'est le spot parfait pour te plonger dans l'économie de notre serveur.</p>
              </div>

              <div className='containerText'>
                <img src={minecraftMarcherNoir} alt="une image secrète montrant le marcher noir du serveur" id="minecraftMarcherNoir" />
                <p>Et puis, y a le "Marché Noir". Attention, là ça devient sérieux. Imagine un coin sombre, mystérieux, où tu peux mettre la main sur des ressources inédites. Mais, et c'est un gros "mais", faut pas croire que c'est peinard. Les gardes sont là, bien décidés à protéger ces trésors. C'est un peu comme entrer dans une tanière de trésors cachés, où le danger rôde mais les récompenses sont plus qu'alléchantes. Alors, si t'as le courage et la ruse nécessaires, c'est le lieu parfait pour braver l'inconnu et amasser des richesses que peu osent obtenir.</p>
              </div>

              <div className='containerText reverse'>
                <img src={minecraftSalleCoffre} alt="une image montrant l'une de nos salle des coffres" id="minecraftSalleCoffre" />
                <p>Tous ces détails, ces paysages, c'est un peu comme si on avait mis tout notre cœur dans la création d'un monde où chacun peut se perdre et s'émerveiller. C'est le fruit de nos idées les plus folles et de nos talents combinés, un peu comme si on avait sculpté une toile où l'exploration devient une aventure épique. Quand tu te balades dans ces zones, c'est un peu comme si tu lisais une histoire interactive, où chaque pas te rapproche d'une nouvelle découverte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
