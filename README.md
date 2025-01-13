# Area_Front_end
Area Project but just with the front end part

Fonctionnalités principales

Authentification et sécurité :

Gestion des connexions et inscriptions (Firebase Authentication).

Support des méthodes OAuth2 pour des intégrations tierces (par exemple, GitHub, Google).

Installation et lancement

Prérequis :

Node.js (>=14.x)

npm ou yarn

Cloner le dépôt :

git clone <URL_DU_DEPOT>
cd area-frontend

Installer les dépendances :

npm install
# ou
yarn install

Configurer les variables d'environnement :
Créez un fichier .env à la racine avec les variables suivantes :

REACT_APP_API_URL=http://localhost:5000
REACT_APP_FIREBASE_API_KEY=<votre_firebase_api_key>
REACT_APP_OAUTH2_CLIENT_ID=<votre_client_id>

Lancer l'application :

npm start
# ou
yarn start

L'application sera accessible à l'adresse : http://localhost:3000.


