document.addEventListener("DOMContentLoaded", hentJson);




//For geomuseum faxe
let indhold;
async function hentJson() {
    const url = "http://sunnivahyllseth.com/kea/cms/wordpress//wp-json/wp/v2/Museumer/160";
    //henter data filen
    const myJson = await fetch(url);
    //den hentede data skal tolkes som json
    indhold = await myJson.json();
    //kald funktion der viser data i DOM
    visIndhold();
};

function visIndhold() {
    document.querySelector(".eksempel11").innerHTML += indhold.museum_overskrift;

    document.querySelector(".eksempel11").innerHTML += `<img class="SplashBillede" src=${indhold.splashbillede.guid} alt="billede">`;

    document.querySelector(".eksempel11").innerHTML += indhold.titeloverskrift;
    document.querySelector(".eksempel11").innerHTML += indhold.tekst;

    document.querySelector(".eksempel11").innerHTML += `<img class="Billeder" src=${indhold.billeder.guid} alt="billede">`;

    document.querySelector(".eksempel11").innerHTML += indhold.tekst_2;







}
