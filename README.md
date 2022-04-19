<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://www.cerza.com/wp-content/themes/marqueblanche/image/logo.svg" alt="Logo" width="120">

  <h1 align="center">Projet tkt</h1>
<p align="center">
    <a href="https://github.com/sinan-yazici/projet-tkt/issues">Signaler un Bug</a>
 <a href="https://github.com/Sinan-yazici/Projet-tkt/issues">Demander une nouvelle fonctionnalitée</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#Presentation">Présentation</a>
      <ul>
        <li><a href="#Contexte">Contexte</a></li>
        <li><a href="#Projet">Projet</a></li>
	<li><a href="#Technologie">Technologies Utilisées</a></li>
      </ul>
    </li>
    <li>
      <a href="#Installation">Installation</a>
      <ul>
        <li><a href="#Prerequis">Les Prérequis</a></li>
        <li><a href="#Importation">Importation du projet</a></li>
        <li><a href="#Configuration">Configuration</a></li>
        <li><a href="#Importation">Importer la base de données</a></li>
      </ul>
    </li>
    <li><a href="#Utilisation">Utilisation</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#Images">Les Images</a></li>
  </ol>
</details>

<!-- Contexte -->
## Contexte

![Cover](https://github.com/sinan-yazici/projet-tkt/blob/master/image/cerza.PNG)

Agence experte spécialisée dans le développement web et d’application mobile, TKT conseille et accompagne les créations, transformations digitales des startups, PME et grands groupes.

L’agence accompagne ses clients lors de la définition des besoins (expression de besoin, cahier des charges, conception fonctionnelle, UX design, graphisme, prototype, MVP, POC, ...), pendant la phase de développement du projet (application web, application mobile native, application mobile hybride, ...) jusqu’à la maintenance du projet mis en ligne.

Dans ce projet, nous travaillons dans cette société dans le service ‘développement mobile’, notre équipe est constitué de 2 ou 3 membres.

<p align="right">(<a href="#top">Retour en haut</a>)</p>

### Projet

Le directeur général du zoo de CERZA, désire équiper les salariés avec une application mobile interne à la société, l’objectif mettre en place une solution facile d’utilisation pour faire gagner du temps dans les activités de toutes les équipes du zoo.

Il désire une application, accessible et ergonomique, objectif utilisé le numérique pour avoir une vue globale des activités réaliser.


Notre équipe a été chargée de réaliser ce projet pour le zoo de cerza.

<p align="right">(<a href="#top">Retour en haut</a>)</p>

### Technologie

Lors de la réalisation de ce projet, nous avons utilisés différentes technologies :

* [Ionic 5](https://ionic.io/)
* [Angular 13](https://angular.io/)
* [Node js](https://nodejs.org/en/)

<p align="right">(<a href="#top">Retour en haut</a>)</p>

<!-- Installation -->
## Installation

Afin de pouvoir visualiser et utiliser notre projet, il est néccessaire de procéder à quelques actions :

### Les Prérequis

Dans un premier temps, nous aurons besoin de ionic 

* Télécharger ionic sur [ionic.io](https://ionicframework.com/docs/intro/cli)

Ensuite, nous aurons besoin de angular

* Télécharger angular 13 sur [angular.io](https://angular.io/guide/setup-local)

Puis, nous aurons besoin de node JS

* Télécharger node js [nodejs.org](https://nodejs.org/en/download/)

Sans oublier que, nous aurons besoin d'un serveur de base de données (ici wampserver)
* Télécharger WampServer sur [wampserver.com](https://www.wampserver.com/)

Ainsi que d'un simulateur de téléphone qui est disponible dans les extensions Google
* Télécharger MobileFirst sur [webmobilefirst.com](https://www.webmobilefirst.com/)

Enfin, nous utilisons Cors qui est aussi une extensions disponible sur Google
* Télécharger Cors sur [Cors](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
### Importation

1. Cloner le repository
   ```sh
   https://github.com/sinan-yazici/Projet-tkt.git
   ```
2. lancer le server ionic
* Ce rendre à l'emplacement du projet dans l'invite de commande
```sh
  ionic serve
```
3. lancer l'api pour pouvoir récupérer les informations
* Ce rendre à l'emplacement du projet dans l'invite de commande puis entrer dans le dossier api pour effectuer cette commande
```sh
  npm start
```
4. Activer le simulateur mobile dans les extensions

5. Activer l'extensions Cors
<p align="right">(<a href="#top">Retour en haut</a>)</p>


### Configuration

Pensez à lancer WampServer pour avoir accés à la base de données. 

Ensuite changer les informations de connexion à la base de données dans le fichier de configuration.

![Cover](https://github.com/sinan-yazici/projet-tkt/blob/master/image/dbconfig.PNG)

### Importation

importer la base de données dans PhpMyAdmin :

![Cover](https://github.com/sinan-yazici/projet-tkt/blob/master/image/import.PNG)

Cela va nous permettre d'avoir accés à toutes les informations concernant le Zoo de Cerza

<!-- Utilisation -->
### Identifiant 

Pour la connexion à l'application l'identifiant et le mot de passe est en base de données. Mais tous les mots de passe sont identifiant123.

* identifiant admin = paul
* mot de passe = paul123

* identifiant utilisateur = margot
* mot de passe = margot123

Pour avoir accés à l'application saisir l'identifiant et le mot de passe, puis appuyer deux fois sur connexion.

Une fois connecté il faut refresh la page pour avoir le menu au complet.

## Utilisation

Le projet est constitué de différentes pages :

* page d'authentification
* page de création d'un utilisateur
* présenation des animaux
* présentation des espèces
* liste des missions avec la possibilité d'ajouter, confirmer ainsi 
que l'attribuer à un utilisateur
* Questionnaire pour préciser l'état de santé
* affichage des alertes
* page de création des alertes / modification et suppression 

<!-- CONTACT -->
## Contact

sinan yazici - [@sinan-yazici](https://fr.linkedin.com/in/sinan-yazici-20381519b) - sinan.yaz@hotmail.com

Lien du projet : [https://github.com/sinan-yazici/projet-tkt](https://github.com/sinan-yazici/projet-tkt)

<p align="right">(<a href="#top">Retour en haut</a>)</p>

## Images

Toutes les images de notre application ainsi que toutes les informations son disponible sur le site du [https://www.cerza.com/](https://www.cerza.com/)
