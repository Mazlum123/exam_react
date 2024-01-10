import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryDetails({ categories }) {
  // Récupération de l'ID de catégorie depuis les paramètres de l'URL
  let { id } = useParams();
  
  // Données spécifiques à chaque catégorie
  const categoryData = {
    "1": [
      {
        name: "Football",
        desc: "Sport d'équipe joué sur un grand terrain rectangulaire, où deux équipes de onze joueurs utilisent principalement leurs pieds pour contrôler et diriger un ballon rond dans le but de marquer dans le filet adverse. Très populaire dans le monde entier, il est connu pour sa passion et ses compétitions internationales telles que la Coupe du Monde. Le football allie endurance, technique, stratégie d'équipe et habileté individuelle.",
        imageUrl: "./img/sport/football.jpg"
      },
      {
        name: "Basketball",
        desc: "Sport rapide et dynamique où deux équipes de cinq joueurs chacune s'affrontent pour marquer des points en lançant un ballon dans le panier de l'adversaire, situé à chaque extrémité d'un terrain rectangulaire. Le basketball est célèbre pour ses matchs intenses, ses dunks spectaculaires et ses compétitions de haut niveau comme la NBA. Il nécessite agilité, coordination, force et une excellente compréhension du jeu d'équipe.",
        imageUrl: "./img/sport/basketball.jpg"
      },
      {
        name: "Tennis",
        desc: "Sport de raquette classique où les joueurs, individuellement ou en paires, frappent une balle par-dessus un filet central dans le but de marquer des points contre leur adversaire. Le tennis est connu pour ses tournois prestigieux tels que Wimbledon, l'US Open, et nécessite une grande endurance, une technique raffinée et une stratégie mentale aiguisée. Chaque match est un test de force, de précision et de persévérance.",
        imageUrl: "./img/sport/tennis.jpg"
      },
      {
        name: "Natation",
        desc: "Compétition aquatique où les athlètes nagent sur différentes distances et styles, tels que le crawl, la brasse, le dos et le papillon. La natation teste l'endurance, la force, et la technique de respiration des nageurs. Populaire aux Jeux Olympiques, elle est pratiquée dans des piscines de dimensions réglementées et nécessite un entraînement rigoureux et une discipline stricte.",
        imageUrl: "./img/sport/natation.jpg"
      },
      {
        name: "Athlétisme",
        desc: "Termes générique pour une variété de compétitions sportives basées sur la course, le saut, le lancer et les épreuves combinées. L'athlétisme est le cœur des Jeux Olympiques et teste la vitesse, l'endurance, la force et la technique des athlètes. Des épreuves comme le sprint, le marathon, le saut en hauteur, et le lancer de javelot sont représentatives de cette discipline ancienne et respectée.",
        imageUrl: "./img/sport/athletisme.jpg"
      },
      {
        name: "Volleyball",
        desc: "Sport d'équipe joué par deux équipes de six sur un terrain divisé par un filet. Les joueurs frappent un ballon en l'air dans le but de le faire atterrir sur le terrain de l'équipe adverse. Le volleyball exige une grande coordination d'équipe, des réflexes rapides et une capacité à effectuer des frappes puissantes et stratégiques. Populaire dans les écoles et au niveau professionnel, il existe également en version plage.",
        imageUrl: "./img/sport/volleyball.jpg"
      },
      {
        name: "Rugby",
        desc: "Sport d'équipe intense et physique joué avec un ballon ovale. Deux équipes luttent pour marquer des points en portant ou en lançant le ballon dans la zone d'en-but de l'adversaire. Le rugby est connu pour ses mêlées, ses plaquages et sa nature robuste. Il nécessite force, agilité, endurance et un esprit d'équipe solide. Il se décline en différentes variantes comme le rugby à XV et à VII.",
        imageUrl: "./img/sport/rugby.jpg"
      },
      {
        name: "Golf",
        desc: "Sport de précision et de patience où les joueurs utilisent différents clubs pour frapper une balle dans une série de trous sur un parcours en utilisant le moins de coups possible. Le golf exige une grande maîtrise technique, une planification stratégique et une concentration mentale. Joué sur des parcours pittoresques, il est autant un défi contre soi-même que contre le terrain.",
        imageUrl: "./img/sport/golf.jpg"
      },
      {
        name: "Cyclisme",
        desc: "Sport d'endurance où les coureurs parcourent de longues distances sur des vélos. Il peut prendre plusieurs formes, comme le cyclisme sur route, sur piste, le VTT et le BMX. Le cyclisme teste l'endurance, la vitesse, et la stratégie d'équipe, avec des événements comme le Tour de France. C'est un sport exigeant qui combine entraînement physique intense et tactiques de course.",
        imageUrl: "./img/sport/cyclisme.jpg"
      },
      {
        name: "Boxe",
        desc: "Sport de combat où deux adversaires se battent à coups de poing dans un ring. La boxe teste la force, la vitesse, la réflexion tactique et la résilience. Les boxeurs portent des gants rembourrés et doivent respecter des règles strictes, avec des matchs jugés sur des points ou gagnés par K.O. La boxe requiert un entraînement physique et mental rigoureux, ainsi qu'une discipline stricte.",
        imageUrl: "./img/sport/boxe.jpg"
      }
    ],
    "2": [
      {
        name: "Rock",
        desc: "Genre musical dynamique caractérisé par l'utilisation dominante de guitares électriques, de batterie, et souvent d'une forte présence vocale. Le rock a de nombreux sous-genres, allant du rock 'n' roll des années 50 au grunge des années 90. Il est connu pour ses performances énergiques et ses paroles souvent axées sur l'expression personnelle et la rébellion.",
        imageUrl: "./img/musique/rock.jpg"
      },
      {
        name: "Pop",
        desc: " Genre de musique extrêmement populaire et accessible, avec des mélodies accrocheuses, des rythmes dansants et souvent des paroles simples. La musique pop englobe une variété de styles et tend à refléter les tendances culturelles du moment. Les artistes pop sont souvent au sommet des charts et sont célèbres pour leurs clips vidéo innovants et leurs performances spectaculaires.",
        imageUrl: "./img/musique/pop.jpg"
      },
      {
        name: "Jazz",
        desc: "Genre musical originaire des communautés afro-américaines au début du XXe siècle, connu pour sa nature improvisée, ses rythmes syncopés et son utilisation unique d'instruments comme le saxophone et la trompette. Le jazz varie du swing au bebop et au jazz fusion, offrant une riche histoire culturelle et une profonde influence sur d'autres genres musicaux.",
        imageUrl: "./img/musique/jazz.jpg"
      },
      {
        name: "Classique",
        desc: "Genre musical riche et complexe, englobant une large gamme de styles et de périodes, allant de la musique baroque à la musique contemporaine. La musique classique est souvent jouée par des orchestres symphoniques ou des ensembles de chambre et est connue pour ses compositions élaborées et ses techniques exigeantes.",
        imageUrl: "./img/musique/classique.jpg"
      },
      {
        name: "Hip-Hop",
        desc: "Mouvement culturel et style musical né dans les années 70 dans les rues de New York, caractérisé par le rap, le DJing, le breakdance et le graffiti. Le hip-hop est une expression de la vie urbaine et aborde souvent des sujets sociaux et politiques. Ses rythmes distinctifs et sa poésie parlée ont une influence majeure sur la musique contemporaine.",
        imageUrl: "./img/musique/hip-hop.jpg"
      },
      {
        name: "Electro",
        desc: "Genre de musique électronique qui utilise des synthétiseurs, des boîtes à rythmes et des effets sonores. Il varie de la house à la techno et au dubstep. L'électro est connue pour ses rythmes dansants et ses sons futuristes, souvent jouée dans les clubs et les festivals.",
        imageUrl: "./img/musique/electro.jpg"
      },
      {
        name: "Reggae",
        desc: "Genre musical développé en Jamaïque dans les années 60, caractérisé par un rythme décontracté, des influences du ska et du rocksteady, et des paroles souvent engagées. Le reggae est étroitement lié à la culture rastafari et a été popularisé dans le monde entier par des artistes comme Bob Marley.",
        imageUrl: "./img/musique/reggae.jpg"
      },
      {
        name: "Blues",
        desc: "Genre musical profondément expressif, né de l'expérience afro-américaine, avec des racines dans les chants de travail et les spirituals. Le blues est caractérisé par ses structures répétitives, ses paroles poignantes et son utilisation intense de la guitare. Il a influencé presque tous les autres genres de musique moderne.",
        imageUrl: "./img/musique/blues.jpg"
      },
      {
        name: "Country",
        desc: "Genre musical originaire des régions rurales du Sud des États-Unis, caractérisé par ses instruments à cordes comme la guitare, le banjo et le violon. Les paroles du country abordent souvent des thèmes de la vie quotidienne et des histoires personnelles, avec un style vocal distinctif.",
        imageUrl: "./img/musique/country.jpg"
      },
      {
        name: "Folk",
        desc: "Genre musical traditionnel qui transmet les histoires, les légendes et les coutumes d'une culture à travers des chansons simples et mélodiques. Les instruments acoustiques comme la guitare, le violon et l'harmonica sont typiques du folk. Il est connu pour sa nature intime et son expression personnelle.",
        imageUrl: "./img/musique/folk.jpg"
      }
    ]
    ,
    "3": [
      {
        name: "Action",
        desc: "Genre de film mettant en scène des séquences spectaculaires, souvent centrées sur des combats, des poursuites et des explosions. Les films d'action sont connus pour leur rythme rapide, leurs cascades audacieuses et leurs héros charismatiques. Ils offrent souvent une expérience cinématographique intense et divertissante.",
        imageUrl: "./img/film/action.png"
      },
      {
        name: "Comédie",
        desc: "Genre de film axé sur l'humour, présentant des situations amusantes, des dialogues espiègles et des personnages excentriques. Les comédies peuvent varier de la comédie romantique légère à la satire sociale. Elles visent à divertir et à provoquer le rire du spectateur.",
        imageUrl: "./img/film/comedie.png"
      },
      {
        name: "Horreur",
        desc: "Genre de film conçu pour effrayer, choquer ou inquiéter le spectateur. Les films d'horreur utilisent souvent des éléments surnaturels, des monstres, des fantômes ou des psychopathes. Ils explorent des thèmes de peur, de l'inconnu et de l'horreur psychologique.",
        imageUrl: "./img/film/horreur.png"
      },
      {
        name: "Science-Fiction",
        desc: " Genre de film explorant des concepts futuristes, scientifiques ou technologiques. Les films de science-fiction peuvent inclure des voyages dans l'espace, le temps, des réalités alternatives ou des avancées technologiques. Ils offrent souvent une réflexion sur l'impact de la science sur la société.",
        imageUrl: "./img/film/sciencefiction.png"
      },
      {
        name: "Drame",
        desc: "Genre de film centré sur le développement de personnages complexes et des histoires émotionnellement intenses. Les drames explorent souvent des thèmes sérieux et des conflits interpersonnels, offrant une plongée profonde dans l'expérience humaine et ses nuances.",
        imageUrl: "./img/film/drame.png"
      },
      {
        name: "Documentaire",
        desc: "Genre de film visant à présenter la réalité, des faits ou des informations sur un sujet particulier. Les documentaires peuvent explorer des thèmes variés comme la nature, l'histoire, la culture ou des enjeux sociaux. Ils sont souvent éducatifs et peuvent être narratifs ou observationnels.",
        imageUrl: "./img/film/documentaire.png"
      },
      {
        name: "Animation",
        desc: "Genre de film utilisant des techniques d'animation pour créer les personnages et les environnements. Les films d'animation peuvent être destinés aux enfants comme aux adultes et offrent une grande liberté créative dans leur style et leur narration.",
        imageUrl: "./img/film/animation.png"
      },
      {
        name: "Aventure",
        desc: "Genre de film utilisant des techniques d'animation pour créer les personnages et les environnements. Les films d'animation peuvent être destinés aux enfants comme aux adultes et offrent une grande liberté créative dans leur style et leur narration.",
        imageUrl: "./img/film/aventure.png"
      },
      {
        name: "Thriller",
        desc: "Genre de film créant une tension intense, de l'excitation et de l'anticipation. Les thrillers sont souvent centrés sur des mystères, des intrigues politiques ou des crimes, avec des rebondissements inattendus et une atmosphère de suspense.",
        imageUrl: "./img/film/thriller.png"
      },
      {
        name: "Fantaisie",
        desc: "Genre de film présentant des éléments fantastiques, magiques et mythologiques. Les films de fantaisie créent souvent des univers entiers avec leurs propres règles et créatures mythiques, offrant une évasion dans des mondes imaginaires riches et diversifiés.",
        imageUrl: "./img/film/fantaisie.png"
      }

    ]
  };

  // Sélection des éléments de la catégorie actuelle ou un tableau vide s'il n'y en a pas
  const items = categoryData[id] || [];

  return (
    <div>
      <Link to="/"><button className="return-button">Retour à la page d'accueil</button></Link>
      <h2 className="category-card h3" >Détails de la Catégorie {id}</h2>
      <ul className="item-list" >
        {items.map((item, index) => (
          <li key={index} className="category-card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <img src={require(`${item.imageUrl}`)} alt={item.name} style={{ maxWidth: "100px" }}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetails;

