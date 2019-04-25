document.addEventListener("DOMContentLoaded", hentJson);




//For geomuseum faxe
let GeomusemFaxeForside;
async function hentJson() {
    const url = "http://sunnivahyllseth.com/kea/cms/wordpress//wp-json/wp/v2/Museumer/160";
    //henter data filen
    const myJson = await fetch(url);
    //den hentede data skal tolkes som json
    GeomusemFaxeForside = await myJson.json();
    //kald funktion der viser data i DOM
    visIndhold();
};

function visIndhold() {
    document.querySelector(".eksempel11").innerHTML += GeomusemFaxeForside.museum_overskrift;

    document.querySelector(".eksempel11").innerHTML += `<img class="SplashBillede" src=${GeomusemFaxeForside.splashbillede.guid} alt="billede">`;

    document.querySelector(".eksempel11").innerHTML += GeomusemFaxeForside.titeloverskrift;
    document.querySelector(".eksempel11").innerHTML += GeomusemFaxeForside.tekst;

    document.querySelector(".eksempel11").innerHTML += `<img class="Billeder" src=${GeomusemFaxeForside.billeder.guid} alt="billede">`;

    document.querySelector(".eksempel11").innerHTML += GeomusemFaxeForside.tekst_2;
}
