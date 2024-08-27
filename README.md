## Installation

## Configuration de l'environnement

1. Copiez `.env.example` en `.env`
2. Modifiez les valeurs dans `.env` selon vos besoins

### Prérequis

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation et lancement du _back-end_

Cloner le repo du _back-end_ de _SportSee_ :

`git clone https://github.com/maxdnc/P9-front-end-dashboard`

En se plaçant dans ce repo du _back-end_, installer ses dépendances :

`npm install`

Lancer le _back-end_ sur le port 3000 (port par défaut) :

`npm run start`

### Installation et lancement du _front-end_

Cloner le présent repo du _front-end_ de _SportSee_ :

`git clone https://github.com/maxdnc/sportsee.git`

En se plaçant dans ce repo du _front-end_, installer ses dépendances :

`npm install`

Lancer le _front-end_ sur le port 3001 :

`npm run dev`

Le _front-end_ est alors consultable à l'URL `http://localhost:5173` par default.

### N.B. :

- l'API de _SportSee_ ne fournit des données que pour les utilisateurs d'id 12 et 18.
