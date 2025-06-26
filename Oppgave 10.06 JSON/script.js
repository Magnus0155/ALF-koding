// Oppgave1

let utskrift = document.getElementById("output")

function saveToLocal() {

    let frNavn = document.getElementById("fornavn").value
    let ettNavn = document.getElementById("etternavn").value

    let person = {"fornavn":frNavn, "etternavn":ettNavn}
    localStorage.setItem("person", JSON.stringify(person))

}

function getNameFromLocal() {
    let person = JSON.parse(localStorage.getItem("person"))
    let message

    if (!person) {
        person = "Ikke registrert"
    }  else {
        person = `Velkommen ${person.fornavn} ${person.etternavn}`
    }
    utskrift.textContent = message
}


window.onload = getNameFromLocal