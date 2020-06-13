function testFonctionnalites() {

document.querySelector("#geoloc").innerHTML = Modernizr.geolocation ? "pris en charge" : "non pris encharge"; 


document.querySelector("#touch").innerHTML = Modernizr.touch ? "pris en charge" : "non pris encharge" ;


document.querySelector("#svg").innerHTML = Modernizr.svg ? "pris en charge" : "non pris en charge";


document.querySelector("#canvas").innerHTML = Modernizr.canvas ? "pris en charge" : "non pris en charge";


}


/*Ce code teste la prise en charge des fonctionalités et affiche le résultat dans les sélecteurs correspondant à des éléments dans le fichier HTML. 
Par exemple :
- document.querySelector("#geoloc"): correspond au mot "Geolocalisation:" sur la page HTML

*/

window.onload = testFonctionnalites; //Lancement du test au demarrage de la page dans le navigateur
