document.addEventListener("DOMContentLoaded", hentJson);
let indhold;
async function hentJson() {
    const url = "http://sunnivahyllseth.com/kea/cms/wordpress/wp-json/wp/v2/pages/10";
    //henter data filen
    const myJson = await fetch(url);
    //den hentede data skal tolkes som json
    indhold = await myJson.json();
    //kald funktion der viser data i DOM
    visIndhold();
};

function visIndhold() {
    document.querySelector(".eksempel").textContent = indhold.title.rendered;
    document.querySelector(".eksempel2").innerHTML = indhold.content.rendered;
}
