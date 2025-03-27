const boksOppsummert = document.querySelector(".oppsummering")
const punkterEl = document.querySelector(".punkter")
const knappEl = document.querySelector(".visMer")
let x = 0
function storBoks() {
    if (x % 2 == 0) {
        punkterEl.style.display = "flex"
        boksOppsummert.style.height = "fit-content"
        knappEl.innerHTML = "Vis mindre"
        x++
    }
    else {
        punkterEl.style.display = "none"
        boksOppsummert.style.height = "160px"
        knappEl.innerHTML = "Vis mer"
        x++
    }

}







function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content2")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}


const toggleEl = document.querySelector(".knappikon")
toggleEl.addEventListener("click", Mørkmodus)

const bodyEl = document.querySelector("body")
const navbarEl = document.querySelector(".navbar")
const articleEl = document.querySelectorAll("article")
const overskrifterEl = document.querySelectorAll("h3.artikkeltittel")

function Mørkmodus() {
    let ikon1 = document.querySelector(".ikonmørkmodus")
    if (ikon1.classList.contains("fa-toggle-off")) {
        ikon1.classList.remove("fa-toggle-off")
        ikon1.classList.add("fa-toggle-on")
    } else {
        ikon1.classList.remove("fa-toggle-on")
        ikon1.classList.add("fa-toggle-off")
    }
    bodyEl.classList.toggle("toggleSvart")
    navbarEl.classList.toggle("toggleBlå")
    for (let i = 0; i < articleEl.length; i++) {
        articleEl[i].classList.toggle("toggleArticle")
    }
    for (let i = 0; i < overskrifterEl.length; i++) {
        overskrifterEl[i].classList.toggle("toggleOverskrift")
    }

}


function søk() {
    const søkeord = document.getElementById("søkeord").value.toLowerCase();
    const søkContent = document.getElementById("søkContent");
    søkContent.innerHTML = "";
    søkContent.style.display = "block";

    const links = {
        biler: ["meta mot ai", "biler.html"],
    };


    if (links[søkeord]) {
        søkContent.innerHTML = `<a href="${links[søkeord][1]}">${links[søkeord][0]}</a>`;
    } else {
        søkContent.innerHTML = "<p>Ingen resultater funnet</p>";
    }
}