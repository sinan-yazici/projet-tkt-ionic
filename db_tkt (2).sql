-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 30 mars 2022 à 19:26
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_tkt`
--

-- --------------------------------------------------------

--
-- Structure de la table `alerte`
--

DROP TABLE IF EXISTS `alerte`;
CREATE TABLE IF NOT EXISTS `alerte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `localisation` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `gravite` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk2` (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `alerte`
--

INSERT INTO `alerte` (`id`, `libelle`, `description`, `localisation`, `gravite`, `id_user`) VALUES
(1, 'Objet Perdu', 'Téléphone portable Nokia perdu dans les allées, proche de la mini ferme', 'Proche Mini ferme', 1, 3),
(2, 'Accident enfant', 'Un enfant est tombé de sa poussette et est tombé dans l\'enclos des tigres', 'Enclos des Félins', 4, 4),
(4, 'test', 'efg', 'erhgbq', 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `animal`
--

DROP TABLE IF EXISTS `animal`;
CREATE TABLE IF NOT EXISTS `animal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sexe` varchar(20) COLLATE utf8mb4_bin DEFAULT NULL,
  `prenom` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `id_espece` int(11) NOT NULL,
  `id_enclos` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk5` (`id_espece`),
  KEY `fk6` (`id_enclos`)
) ENGINE=MyISAM AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`id`, `sexe`, `prenom`, `id_espece`, `id_enclos`) VALUES
(1, 'M', 'Oreo', 1, 1),
(2, 'F', 'Maya', 1, 1),
(3, 'M', 'Odis', 1, 1),
(4, 'M', 'Oscar', 2, 4),
(5, 'F', 'Roxy', 2, 4),
(6, 'F', 'Rose', 3, 5),
(7, 'M', 'Eddy', 3, 5),
(8, 'M', 'Bruce', 4, 3),
(9, 'F', 'Eylie', 4, 3),
(10, 'M', 'Domy', 4, 3),
(11, 'M', 'Darwin', 5, 5),
(12, 'F', 'Charlie', 5, 5),
(13, 'M', 'Giles', 6, 7),
(14, 'F', 'Eugène', 6, 7),
(15, 'M', 'Justin', 7, 5),
(16, 'F', 'Milène', 7, 5),
(17, 'M', 'Eude', 7, 5),
(18, 'M', 'Edouard', 8, 2),
(19, 'F', 'Sacha', 8, 2),
(20, 'M', 'Tom', 8, 2),
(21, 'M', 'Timber', 9, 2),
(22, 'M', 'Timeo', 9, 2),
(23, 'F', 'Charlène', 9, 2),
(24, 'M', 'Eude', 10, 3),
(25, 'F', 'Ellie', 10, 3),
(26, 'M', 'Edouard', 10, 3),
(27, 'F', 'Constante', 10, 3),
(28, 'M', 'Domino', 11, 2),
(29, 'F', 'Donna', 11, 2),
(30, 'M', 'Dolly', 11, 2),
(31, 'F', 'Didzy', 11, 2),
(32, 'F', 'Beatrice', 12, 3),
(33, 'F', 'Dwenia', 12, 3),
(34, 'M', 'Paul', 12, 3),
(35, 'M', 'Bob', 12, 3),
(36, 'M', 'Eugène', 13, 6),
(37, 'F', 'Charlotte', 13, 6),
(38, 'M', 'Boby', 14, 7),
(39, 'F', 'Eliza', 14, 7),
(40, 'F', 'Marie', 15, 3),
(41, 'M', 'Billy', 15, 3),
(42, 'F', 'Mélanie', 15, 3),
(43, 'M', 'Frank', 16, 2),
(44, 'F', 'Amanda', 16, 2),
(45, 'M', 'Philipey', 17, 2),
(46, 'F', 'Maya', 17, 2),
(47, 'M', 'Alberto', 18, 3),
(48, 'F', 'Domy', 18, 3),
(49, 'F', 'Cilia', 19, 3),
(50, 'M', 'Odly', 19, 3),
(51, 'F', 'Many', 20, 5),
(52, 'M', 'Teddy', 20, 5),
(53, 'M', 'Galou', 21, 5),
(54, 'F', 'Tyna', 21, 5),
(55, 'M', 'Sow', 22, 2),
(56, 'F', 'Maila', 22, 2),
(57, 'M', 'Bacon', 22, 2),
(58, 'M', 'Diablo', 23, 4),
(59, 'F', 'Meuden', 23, 4),
(60, 'F', 'Mineau', 23, 4),
(61, 'F', 'Mineau', 23, 4),
(62, 'F', 'Mineau', 23, 4),
(63, 'F', 'Morgane', 24, 3),
(64, 'F', 'Stella', 24, 3),
(65, 'M', 'Onix', 24, 3);

-- --------------------------------------------------------

--
-- Structure de la table `enclos`
--

DROP TABLE IF EXISTS `enclos`;
CREATE TABLE IF NOT EXISTS `enclos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `emplacement` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `enclos`
--

INSERT INTO `enclos` (`id`, `libelle`, `emplacement`) VALUES
(1, 'Enclos des Félins', 'Allée B8'),
(2, 'Enclos des Ours', 'Allée E9'),
(3, 'Espace Safari', 'Allée A3'),
(4, 'Volière', 'Allée 2B'),
(5, 'Serre Tropicale', 'Allée Y6'),
(6, 'Bassin Aquatique', 'Allée 5H'),
(7, 'Espace Herbivores', 'Allée 4G');

-- --------------------------------------------------------

--
-- Structure de la table `espece`
--

DROP TABLE IF EXISTS `espece`;
CREATE TABLE IF NOT EXISTS `espece` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `description` text COLLATE utf8mb4_bin NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `id_pays` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk3` (`id_pays`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `espece`
--

INSERT INTO `espece` (`id`, `libelle`, `description`, `image`, `id_pays`) VALUES
(1, 'Le Tigre Blanc', 'Félin solitaire, le Tigre du Bengale s’active aux mêmes heures que les proies dont il se nourrit.\r\n\r\nIl préfère d’ailleurs la chasse en milieu dense, ce qui lui permet de mieux se camoufler.\r\n\r\nTrès bon nageur, le Tigre du Bengale passe de longs moments dans l’eau.\r\n\r\nCertains Tigres du Bengale naissent avec une mutation génétique dont la conséquence est la couleur blanche de leur pelage.\r\n\r\nA cause de cette couleur très voyante, ces tigres ne survivent pas dans la nature.\r\n\r\nAu même titre que les autres sous-espèces de tigres, le Tigre du Bengale est proche de l‘extinction.\r\n\r\nSa chasse à des fins commerciales et la disparition de son habitat le condamnent à disparaître des zones sauvages non protégées.', 'https://www.cerza.com/wp-content/uploads/2021/03/Tigre-blanc.jpg', 2),
(2, 'L\'Ara Ararauna', 'Comme les autres espèces d’aras, l’Ara bleu et jaune est un oiseau bruyant et assez facile à repérer grâce à ses plumes vivement colorées.\r\n\r\nCet oiseau vit principalement dans les Varzéas, des forêts périodiquement envahies par les eaux.\r\n\r\nSur le continent Sud-Américain, son importante aire de répartition le rend moins vulnérable que d’autres espèces d’Aras. Toutefois, l’Ara bleu et jaune à déjà disparu de certaines régions comme le sud-est du Brésil ainsi que l’île de Tobago.\r\n\r\nMalgré ses mœurs grégaires, l’Ara bleu et jaune est fidèle en amour. D’ailleurs, dans les groupes, les couples se distinguent bien car les deux amoureux volent aile contre aile.', 'https://www.cerza.com/wp-content/uploads/2021/03/Ara_ararauna_-Gramado_Zoo_Rio_Grande_do_Sul_Brazil-8a-1024x445-1.jpg', 5),
(3, 'L\'Ibis Rouge', 'Ce sont des oiseaux très reconnaissables de par leur couleur rouge orangée. On le retrouve principalement dans les zones humides et marécageuses d’Amérique du sud. Cet animal est grégaire (il vit en groupe) malgré le fait que les mâles soient territoriaux. Ses longues pattes et son long bec recourbé lui permettent de pêcher très facilement dans un environnement vaseux.\r\n\r\nBien qu’il ne soit pas des animaux menacé dans la nature, il est chassé pour sa chair et ses plumes.\r\n\r\nLes ibis juvéniles ont une couleur maronné et non rouge comme les adultes. En effet c’est les pigments (caroténoïne) présents leur alimentation qui donne cette couleur vive.', 'https://www.cerza.com/wp-content/uploads/2021/03/Ibis_Rouge-1024x492-1.jpg', 5),
(4, 'Le Nandou', 'Le Nandou, oiseau coureur sud-américain incapable de voler, peuple de préférence les milieux ouverts proches de points d’eau.\r\nA la période des amours, les mâles se battent pour se constituer un harem puis chacun couve les œufs de ses femelles. Après l’éclosion, le mâle s’occupe des oisillons pendant six mois. Les petits perdus peuvent parfois être adoptés par d‘autres mâles .\r\n\r\nContrairement à celui de sa cousine l‘Autruche qui n‘en compte que deux, le pied du Nandou possède trois doigts. A la course, le Nandou peut atteindre 60 km/h.\r\n\r\nAbattu pour sa viande, ses plumes et son cuir, il voit ses populations diminuer. Cette situation pourrait bien, à l’avenir, finir par menacer l’espèce de disparition.', 'https://www.cerza.com/wp-content/uploads/2021/03/Nandou-4-e1488206338923.jpg', 5),
(5, 'Le Vanneau du Chili', 'Ce petit échassier est toujours le premier à donner l’alerte quand un intrus pénètre sur son territoire. C’est un oiseau assez querelleur qui provoque des disputes avec toutes les autres espèces de la même prairie.\r\n\r\nCe n’est pas une espèce menacée, son aire de répartition est très large. Il semble même bien s’adapter à la vie citadine.\r\n\r\nPour protéger le nid, les deux parents feignent d’être blessés pour attirer le prédateur hors du nid.', 'https://www.cerza.com/wp-content/uploads/2021/03/vanneau-chili-3.jpg', 5),
(6, 'L\'Alpaga', 'L’Alpaga est un cousin du Lama, célèbre Camélidé sud-américain. Il porte cependant une toison plus fournie que son illustre parent, toison qui permet à cet animal de vivre à des altitudes avoisinant les 4800 m. Les hommes élèvent l’Alpaga principalement pour sa laine de très bonne qualité.\r\n\r\nLe Lama, l’Alpaga, la Vigogne et le Guanaco font tous partie de la famille des Camélidés. Le Lama et l’Alpaga sont domestiques.\r\n\r\nL’Alpaga est considéré comme un animal domestique et n’est donc pas menacé.', 'https://www.cerza.com/wp-content/uploads/2021/03/Alapaga-4.jpg', 5),
(7, 'L\'Iguane Vert', 'Reconnaissables grâce à leur couleur verte et à sa crête d’épines qui frange son dos et sa queue. Ils vivent dans les forêts d’Amérique du sud. Actif de jour, ces iguanes essentiellement arboricoles sont aussi bon nageurs. Ils se perchent sur les arbres, souvent en bordure de cours d’eau.\r\n\r\nIl figure en Annexe II de CITES (Convention sur le commerce international des espèces menacées d’extinction). C’est un animal menacé par la destruction de son habitat ainsi que par sa chasse et sa capture.\r\n\r\nUne femelle iguane ne va pondre au maximum 5 à 8 fois dans sa vie. ce qui rend la reproduction de cette espèce très complexe.', 'https://www.cerza.com/wp-content/uploads/2021/03/iguane.jpg', 5),
(8, 'L\'Ours à Lunette', 'Comme tous les ours, l’ours à lunettes est solitaire. Grimpeur hors pair, il n’hésite pas à monter à la cime des arbres pour y chercher sa nourriture. Il est aussi très agile dans la fabrication de nids en branchages pour se reposer.\r\n\r\nL’Ours à lunettes doit son nom aux marques claires qui parfois encerclent ses yeux. Elles varient d’un individu à l’autre et descendent parfois jusqu’à la poitrine.\r\n\r\nMalgré les mesures mises en place, la population de l’Ours à lunettes continue de décroître à cause de la chasse et de la destruction de son environnement.', 'https://www.cerza.com/wp-content/uploads/2021/03/ours-lunettes-1.jpg', 5),
(9, 'Le Loup Arctique', 'Le loup blanc ou loup arctique habite, comme son nom l’indique, dans le Grand Nord canadien. Le loup blanc vit en meute, dont les individus se camouflent dans la neige et se fondent dans le paysage lors de la chasse grâce à leur fourrure blanche.\r\n\r\nSon épaisse fourrure, ses pattes plus petites et ses membres plus courts que chez les autres espèces de loups, lui permettent de garder sa chaleur corporelle et ainsi de supporter les rigueurs du climat arctique.\r\n\r\nComme toutes les espèces de loups, le loup arctique est protégé, mais son habitat inhospitalier et peu accessible le protège de l’homme, son principal prédateur. C’est pour quoi il n’est aujourd’hui pas menacé dans la nature.', 'https://www.cerza.com/wp-content/uploads/2021/03/loup-alaska-3.jpg', 6),
(10, 'Le Bison', 'Le Bison d’Amérique vit dans quelques parcs nationaux nord américains tels que celui de Yellowstone aux USA. Il se déplace en grands groupes constitués de femelles, petits et mâles qui maintiennent leur hiérarchie à l’aide d’impressionnants combats. Ces groupes migrent au gré de la nourriture disponible et des saisons.\r\n\r\nLes Amérindiens avaient fait du Bison une divinité et la base de leur économie. Ils utilisaient sa viande, sa peau et sa carcasse dans leur vie quotidienne.\r\n\r\nPratiquement exterminé par «l’Homme blanc» fin 19ème (il restait alors moins de 1000 bisons), sa réintroduction dans des parcs nationaux a fait croître ses effectifs à quelques centaines de milliers de nos jours.', 'https://www.cerza.com/wp-content/uploads/2021/03/Bison-dAmerique.jpg', 6),
(11, 'L\'Ours Polaire', 'Bien que « polaire », l’ours blanc s’aventure régulièrement sur la toundra l’été où les températures avoisinent les 25°C !\r\n\r\nIl y trouve un biotope différent de celui des glaciers : mousses, lichens, bruyères, rochers et quelques arbustes.\r\n\r\nLa fonte de la banquise diminue le territoire de chasse des ours. Les femelles n’accumulent alors pas assez de réserves pour vivre dans leur tanière ne permettant pas de nourrir correctement les jeunes. Aujourd’hui, 60% des petits meurent avant l’âge d’un an alors qu’ils étaient 40% dans les années 90.\r\n\r\nDes petits gestes simples, comme éteindre les appareils en veille ou composter ses déchets, limitent l’émission de gaz à effet de serre. Cela permet de protéger notre environnement et celui de l’ours polaire.', 'https://www.cerza.com/wp-content/uploads/2021/03/ours-polaire.jpg', 6),
(12, 'Le Kangourou', 'C’est le plus grand des kangourous !\r\n« Macropus » signifie « grandes pattes » et grâce à ces dernières, le kangourou peut effectuer des bonds d’une dizaine de métres et atteindre une vitesse de 50 km/h !\r\n\r\nQuand la femelle met bas, le petit ne mesure que 2 cm ! Il restera dépendant de sa mère près d’un an avant d’être totalement autonome…\r\n\r\nAvec une population variant entre 5 et 12 millions d’individus, le Kangourou roux, considéré comme nuisible en Australie, est chassé pour sa viande et sa peau.', 'https://www.cerza.com/wp-content/uploads/2021/03/Kangourou-roux.jpg', 3),
(13, 'La Loutre', 'Le saviez-vous ?\r\n\r\nLes loutres asiatiques utilisent leurs pattes antérieures pour capturer leurs proies. Leur dentition est quant à elle, parfaitement adaptée au broyage de la carapace des crustacés dont elles raffolent.\r\nDans la nature\r\n\r\nLa perte de son habitat, la pollution qui empoisonne ses proies et le braconnage ont fait diminuer la population de la Loutre asiatique de plus de 30% ces 30 dernières années.\r\nPour la sauver\r\n\r\nLe “Otter Specialist Group” rattaché à l’Union Internationale pour la Conservation de la Nature sensibilise les populations locales à la protection de la loutre et des milieux humides.', 'https://www.cerza.com/wp-content/uploads/2021/03/Loutre-cerza.jpg', 2),
(14, 'Le Siamang', 'Le Siamang est le plus grand des gibbons. Ce singe est réputé pour sa fidélité exemplaire. En effet, une fois le couple formé, les partenaires ne vont plus se quitter.\r\n\r\nLe Siamang se distingue aussi des autres gibbons par la poche élastique située au niveau de sa gorge. Elle amplifie son chant qui peut ainsi être audible sur plusieurs kilomètres.\r\n\r\nBien que ce singe soit peu chassé pour sa viande, il n’en reste pas moins que la destruction de la forêt où il vit et le trafic animalier assombrissent son avenir.', 'https://www.cerza.com/wp-content/uploads/2021/03/Siamang.jpg', 2),
(15, 'Le Chameau', 'Natif des steppes d’Asie centrale, il est reconnaissable à ses deux bosses dorsales.\r\nAdapté aux conditions désertiques, le Chameau de Bactriane est capable de rester plusieurs jours sans boire ni manger et de boire 120 Litres d’eau en une seule fois.\r\n\r\nIl peut supporter des températures variant de -25°C à +50°C. C’est pour cela que l’homme le domestique depuis plus de 4000 ans pour le transport, sa laine, son lait et sa viande.\r\n\r\nLes lèvres très dures de cet herbivore lui permettent de manger les plantes épineuses du désert.\r\n\r\nBien qu’il reste encore 1,5 million d’individus domestiqués, moins d’un millier d’individus sauvages, en danger critique d’extinction, subsistent dans un habitat naturel qui réduit de jours en jours…', 'https://www.cerza.com/wp-content/uploads/2021/03/Chameau-Bactriane.jpg', 2),
(16, 'Le Panda Roux', 'Cet adorable petit carnivore vit dans les forêts d’altitude de Chine, d’Inde, du Bhoutan de Birmanie et du Népal.\r\n\r\nArboricole, il fréquente de préférence les bosquets de bambous dont il se nourrit principalement.\r\n\r\nPlus actif à l’aube et au crépuscule, il grimpe le long des troncs et trotte à vive allure sur le sol.\r\n\r\nIl dort dans des nids installés au faîte des arbres.\r\n\r\nLe panda roux et le grand panda de Chine sont des espèces sympatriques. C’est à dire qu’elles évoluent dans des aires de répartitions qui se chevauchent.\r\n\r\nDepuis ces trente dernières années, les populations de pandas roux déclinent rapidement en raison de la diminution de l’habitat disponible due à la déforestation et à l’accroissement des populations humaines.', 'https://www.cerza.com/wp-content/uploads/2021/03/Panda-roux-4.jpg', 2),
(17, 'L\'Ours Brun', 'L’Ours brun est présent sur les continents asiatique, américain et européen. Jusqu’au début du XIXème, il l’était également en Afrique du Nord. Sa taille varie en fonction de sa localisation. Les plus gros, le grizzly et l’ours kodiak se trouvent aux USA. En France, il est bien plus petit que ses cousins américains.\r\n\r\nL’embryon ne se développe pas immédiatement après l’accouplement des parents. Il se passe une période de 5 mois entre la fécondation et le démarrage de son développement. Ceci pour permettre aux petits de ne pas naître pendant mais à la fin de l’hiver.\r\n\r\nA l’échelle mondiale, l’Ours brun n’est pas menacé mais certaines petites populations se révèlent plus vulnérables que d’autres. En France, autrefois présent dans tous les massifs montagneux, l’Ours n’occupe plus que les Pyrénées. On en compterait une vingtaine.', 'https://www.cerza.com/wp-content/uploads/2021/03/Ourson-bruns-1.jpg', 4),
(18, 'Le Gnou', 'Le saviez-vous ?\r\n\r\nLe gnou est complémentaire du zèbre pour l’alimentation tandis que ce dernier mange les hautes herbes, le gnou préfère les herbes basses. Ils migrent alors ensemble à la recherche de meilleurs pâturages. En constituant ainsi de grands troupeaux, ils impressionnent plus les prédateurs.\r\nDans la nature\r\n\r\nSa période de reproduction et de migration dépendent de la saison des pluies. On le trouve en abondance dans son aire de répartition.\r\n\r\nPour comprendre\r\n\r\nPour le moment les effectifs sont stables mais le gnou bleu est victime de la chasse pour sa viande, de la chasse sportive, des sécheresses accrues et de la fragmentation de son habitat.', 'https://www.cerza.com/wp-content/uploads/2021/03/Gnou.jpg', 1),
(19, 'L\'Autruche', 'L’autruche est le plus grand oiseau au monde mais elle est incapable de voler. En revanche, elle peut atteindre la vitesse de 50 km/h lorsqu’elle se met à courir.\r\n\r\nPour protéger ses petits et détourner l’attention d’un prédateur, le mâle autruche peut feindre d’être blessé. Le prédateur, croyant qu’il s’agit d’une proie facile,  le poursuivra permettant aux autruchons de s’enfuir avec un autre adulte.\r\n\r\nL’élevage d’autruche, en vue de sa consommation, a permis de sauver l’espèce, longtemps chassée pour ses plumes.', 'https://www.cerza.com/wp-content/uploads/2021/03/Autruche.jpg', 1),
(20, 'Le Galago du Sénégal', 'Le Galago du Sénégal est un primate d’Afrique. Il est commun dans les forêts et savanes d’Afrique tropicale. C’est un animal nocturne et arboricole qui se déplace en grimpant ou par bond, mais ne descend jamais au sol. Animal grégaire qui vit généralement en groupe de 2 à 5 individus.\r\n\r\nQuand il se sent menacé, le Galago se place en position de boxeur, en crachant et en jacassant.', 'https://www.cerza.com/wp-content/uploads/2021/03/galago-du-senegal.jpg', 1),
(21, 'Le Gélada', 'Les Géladas sont les seuls singes herbivores. Ils passent le plus clair de leur temps au sol à cueillir de l’herbe. Ils vivent en harem, un mâle s’appropriant plusieurs femelles.\r\n\r\nLe Gelada est surnommé le singe au cœur qui saigne. Pourquoi ? Car il présente au niveau de sa poitrine une zone de peau glabre, de couleur rouge, rappelant la forme d’un cœur.\r\n\r\nLes Geladas sont menacés par l’expansion de l’agriculture  qui modifie leur habitat naturel.', 'https://www.cerza.com/wp-content/uploads/2021/03/gelada-3.jpg', 1),
(22, 'Le Renard Polaire', 'La femelle construit une tanière dans laquelle elle donnera naissance à une dizaine de renardeaux en moyenne. Un record parmi les mammifères sauvages.\r\n\r\nDans la nature :\r\n\r\nIl est capable de résister à des températures extrêmes allant jusqu’à -70°C. Il possède une épaisse fourrure, une longue queue (qui lui sert de couverture), des poils sous les pattes. Ses oreilles et son museau sont très courts limitant les pertes de chaleur.\r\n\r\nConservation :\r\n\r\nDans la majeure partie de son aire de répartition, le renard polaire n’est pas protégé. En revanche en Europe, il bénéficie d’une protection totale depuis les années 1940.', 'https://www.cerza.com/wp-content/uploads/2021/03/renard-polaire-6.jpg', 4),
(23, 'La Cigogne', 'Il n’existe pas de vrai dimorphisme sexuel chez la cigogne blanche. Seul le cigogneau présente une livrée différente de celle des adultes dont il adopte les couleurs vers l’âge d’un an.\r\nCélèbre migratrice, la cigogne peut parcourir des milliers de kilomètres pour rallier son site d’hivernage (l’Afrique) depuis son site de nidification (l‘Europe).\r\n\r\nLa cigogne blanche ne peut émettre ni chant ni véritables cris. Pour communiquer, elle chuinte et claque du bec : on dit qu’elle « craquette ».\r\n\r\nLa cigogne blanche a bien faillit disparaître de France dans les années 70. Grâce à de gros efforts de conservation, elle est aujourd’hui réhabilitée dans son environnement naturel et colonise même la côte Atlantique. Il n’est pas rare de voir des cigognes sauvages en Normandie !', 'https://www.cerza.com/wp-content/uploads/2021/03/Cigogne-blanche.jpg', 4),
(24, 'Le Lycaon', 'Bien que dotés d’un physique modeste, les Lycaons sont de redoutables chasseurs, n’hésitant pas à s’attaquer à des proies beaucoup plus grosses qu’eux. Leur force réside dans le nombre d’individus du groupe et dans sa cohésion.\r\n\r\nLorsque des individus de la meute sont dans l’incapacité de chasser, leurs congénères régurgitent de la viande pour les nourrir comme ils le font pour les petits.\r\n\r\nDes Lycaons ont été équipés de colliers particuliers. Des clous empêchent la mort systématique de l’animal pris au collet et des bandes réfléchissantes rendent les lycaons plus visibles par les automobilistes.', 'https://www.cerza.com/wp-content/uploads/2021/03/african-wild-dog-1332236_960_720.jpg', 1);

-- --------------------------------------------------------

--
-- Structure de la table `infos`
--

DROP TABLE IF EXISTS `infos`;
CREATE TABLE IF NOT EXISTS `infos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `taille` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `nourriture` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `gestation` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `poids` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `id_espece` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk4` (`id_espece`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `infos`
--

INSERT INTO `infos` (`id`, `taille`, `nourriture`, `gestation`, `poids`, `id_espece`) VALUES
(1, '90 cm au garrot', 'Carnivore', '3 mois', '150 à 250 kg', 1),
(2, '110 cm d\'envergure', 'Fruits, graines', '25 à 28 jours', '1,5 kg', 2),
(3, '50 à 60 cm', 'Herbivore', '20 à 23 jours', '700 à 900 g', 3),
(4, '1,30 à 1,40 m', 'Herbivore', '40 jours', '25 kg', 4),
(5, '75 cm d\'envergure', 'Carnivore', '28 jours', '300 g', 5),
(6, '90 cm à 1,10 m au garrot', 'Herbivore', '11 à 12 mois', '55 à 65 kg', 6),
(7, '2 m de long', 'Herbivore', '90 à 120 jours', '4 à 8 kg', 7),
(8, '75 cm au garrot', 'Omnivore', '8 mois', '70 à 115 kg', 8),
(9, '60 à 90 cm', 'Carnivore', '2 mois', '45 à 90 kg', 9),
(10, '160 à 200 cm au garrot', 'Herbivore', '9,5 mois', '400 à 900 kg', 10),
(11, '120 cm au garrot', 'Carnivore', '8 mois', '150 kg', 11),
(12, '1,60 m', 'Herbivore', '30 jours puis 7 mois dans la poche', '70 à 90 kg', 12),
(13, '50 à 60 cm', 'Carnivore, piscivore', '7,5 mois', '10 kg', 13),
(14, '1 m', 'Fruits, herbe et insectes', '7 mois', '10 à 15 kg', 14),
(15, '2 m au garrot', 'Herbivore', '13 mois', '450 à 500 kg', 15),
(16, '1 m de long', 'Feuilles de bambou', '4,5 mois', '4 à 6 kg', 16),
(17, '150 à 280 cm au garrot', 'Omnivore', '6 à 8 mois', '80 à 700 kg', 17),
(18, '1,20 m au garrot', 'Herbivore', '8,5 mois', '110 à 160 kg', 18),
(19, '1,80 m', 'Herbe et petits animaux', '40 jours', '90 à 130 kg', 19),
(20, '15 à 20 cm', 'Omnivore', '140 à 142 jours', '200 à 400 g', 20),
(21, '75 cm au garrot', 'Herbivore', '7,5 mois', '14 à 25 kg', 21),
(22, '40 cm au garrot', 'Carnivore', '2 mois', '3 à 8 kg', 22),
(23, '160 cm au garrot', 'Carnivore', '33 à 34 jours', '2,5 à 4,5 kg', 23),
(24, '90 cm au garrot', 'Carnivore', '2,5 mois', '18 à 36 kg', 24);

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

DROP TABLE IF EXISTS `mission`;
CREATE TABLE IF NOT EXISTS `mission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `valider` tinyint(1) NOT NULL,
  `commentaire` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_animal` int(11) DEFAULT NULL,
  `id_enclos` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk8` (`id_user`),
  KEY `fk9` (`id_animal`),
  KEY `fk10` (`id_enclos`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`id`, `libelle`, `valider`, `commentaire`, `id_user`, `id_animal`, `id_enclos`, `date`) VALUES
(1, 'Nettoyage des niches de la volière', 0, 'trop facile', 4, NULL, 4, '2022-03-08 21:15:18'),
(2, 'Installation nouvelles plantes', 0, NULL, 5, NULL, 6, '2022-03-09 21:15:21'),
(3, 'test sinan', 1, 'oue c\'est marseille bb', 4, 2, 1, '2022-03-16 21:15:23');

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `libelle`) VALUES
(1, 'Afrique'),
(2, 'Asie'),
(3, 'Océanie'),
(4, 'Europe'),
(5, 'Amérique du Sud'),
(6, 'Amérique du Nord');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `libelle`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Structure de la table `sante`
--

DROP TABLE IF EXISTS `sante`;
CREATE TABLE IF NOT EXISTS `sante` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` int(11) NOT NULL,
  `date` date NOT NULL,
  `observation` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `id_animal` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk7` (`id_animal`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `sante`
--

INSERT INTO `sante` (`id`, `note`, `date`, `observation`, `id_animal`) VALUES
(1, 1, '2022-03-03', 'jlnk', 1),
(2, 8, '2020-05-10', 'admin', 2),
(3, 1, '2020-02-02', 'bhinjokp', 3),
(4, 2, '2020-02-02', 'sinan test la veille du master', 1),
(5, 2, '2020-02-02', 'tyuriopn,p', 1),
(6, 2, '2020-02-02', 'ucyivuoipo^p', 1),
(7, 2, '2020-02-02', 'yiuoipo', 1),
(8, 2, '2020-02-02', 'yiuoipo', 1),
(9, 2, '2020-02-02', 'ytiuoipo^p', 1),
(10, 2, '2020-02-02', 'ytiuoipo^p', 1),
(11, 3, '2020-02-02', 'ytiuoipo^p', 1),
(12, 2, '2020-02-02', 'TRHYFG', 1),
(13, 2, '2020-02-05', 'uyobipon', 1),
(14, 2, '2020-02-05', 'uyobipon', 1),
(15, 2, '2020-02-05', 'uyobipon', 1),
(16, 2, '2020-02-20', 'uipoi', 1),
(17, 2, '2020-02-02', 'RUTFCYGVKU', 1),
(18, 2, '2022-02-02', 'tufyvgiuoip^p', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `nom` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `prenom` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `id_role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk1` (`id_role`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `nom`, `prenom`, `id_role`) VALUES
(4, 'christophe', '$2a$12$KSoTzSEPZzIq8YxDDWXJQOVJXCBASk4D7rl7mjCSPPeu.rh5yLV1.', 'Walter', 'Christophe (mdp christophe123)', 2),
(3, 'paul', '$2a$12$RRzN3mL60n1s9zvCaHHkte7itbXMjV2PVceEODgs1n.8TXijyvVyK', 'Dutroux', 'Paulette (mdp paul123)', 1),
(5, 'margot', '$2a$12$710SCTO5LMW6ikztV7YDlekY/zRzk.mdnM9cNDllXEk3Zi3sKKSYK', 'Simon', 'Margot (mdp margot123)', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
