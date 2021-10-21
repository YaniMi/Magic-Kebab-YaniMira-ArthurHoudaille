Explication de l'organisation du code :
Il y a 2 dossiers principaux :
assets qui contient les fichier CSS principaux 
pour le style de la page. 
Le dossier component qui contient respectivement :
- Le caddie (Cart.js)
- Le header (Header.js)
- Item (Item.js) qui représente le modèle de kebab que l'on pourra changer dans Items.js
- Items.js

Et bien sur le fichier App.js qui représente l'application appelant les différents components qui composent le site.

Dans items.js on peut ajouter des élément "kebab" définis dans le composant Item.js 

Le Cart.js est le caddie, lorsque l'utilisateur appuie sur le bouton "panier" (basket en anglais), il est redirigé vers le caddie (cart), ou tout les articles mis dans le panier ainsi que leur prix (+ le prix de la taxe TVA) lui sont renseigné.
Il a pour option de supprimer des articles ou de payer la commande.