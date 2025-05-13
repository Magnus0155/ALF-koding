/*Oppgave1*/


function visAlle() {
    let verdi = document.getElementById("numberInpt").value
    let number = parseFloat(verdi)

    document.getElementById("divHalvparten").innerHTML = number / 2
    document.getElementById("divDobbel").innerHTML = number * 2
    document.getElementById("divTredobbel").innerHTML = number * 3
    document.getElementById("divGangeMedSelv").innerHTML = number * number
}

/*Oppgave2 Fungerer men kan jobbe med videre*/

function konverterer() {
    let farenheit = document.getElementById("farenheitKonverterer").value
    let farenheitVerdi = parseFloat(farenheit)

    let celcius = document.getElementById("celciusKonverterer").value
    let celciusVerdi =  parseFloat (celcius)

    document.getElementById("farenTilCel").innerHTML = (farenheitVerdi - 32) * 5 / 9
    document.getElementById("celTilFaren").innerHTML = celciusVerdi * 9 / 5 + 32;
}

/*Oppgave3 samme som 2, Kan lage finere senere*/

function hastighetKonverterer() {
    let km = document.getElementById("kmKonverterer").value
    let kmVerdi = parseFloat(km)

    let mil = document.getElementById("milKonverterer").value
    let milVerdi = parseFloat(mil)

    document.getElementById("kmTilMil").innerHTML = kmVerdi * 1.60934
    document.getElementById("milTilKm").innerHTML = milVerdi * 0.621371
}

/*Oppgave4 La til en btn selv om det ikke var nubv*/

function bmiBtn() {
    let høyde = document.getElementById("høydeInput").value
    let vekt = document.getElementById("vektInput").value
    let bmi = vekt / (høyde*høyde)

    document.getElementById("bmiSvar").innerHTML ="Basert på din høyde" +" "+høyde+" "+"og vekt"+ " "+vekt+" "+ "er din BMI" + bmi
}

/*Oppgave5*/

function lengthBtn() {
    let text = document.getElementById("textArea").value
    let length = text.length

    document.getElementById("utskrift").innerHTML = length
}

function upperCaseBtn() {
    let text = document.getElementById("textArea").value
    let result = text.toUpperCase()

    document.getElementById("utskrift").innerHTML = result
}

function lowerCaseBtn() {
    let text = document.getElementById("textArea").value
    let result = text.toLowerCase();

    document.getElementById("utskrift").innerHTML = result
}

/*Oppgave6*/
/* hadde ikke flere oppgaver så gbrukte mer tid her
function emailBtn() {
    let text1 = document.getElementById("fornavnText")
    let text2 = document.getElementById("etternavnText")
    let resultat = text1.concat(text2)

    document.getElementById("concDiv").innerHTML = resultat+"@email.com"
}
*/




//funker ikke enda. 
/*
document.addEventListener("DOMContentLoaded", function () {
    let emailBtn = document.getElementById("email-btn")

    emailBtn.addEventListener("click", function() {
        let text1 = document.getElementById("fornavnText").value
        let text2 = document.getElementById("etternavnText").value
        let resultat = text1.concat(" ", text2);

        document.getElementById("concDiv").textContent = resultat
    })
})
*/

function testFunction(){
    alert("clicked")
}

document.getElementById("email-btn").addEventListener("click,testFunction")



//Ekstraoppgave

function visOppsummering() {
    let navn = document.getElementById("text").value
    let alder = document.getElementById("alder").value
    let epost = document.getElementById("epost").value
    let fodsel = document.getElementById("fodsel").value
    let farge = document.getElementById("farge").value
    let fornoyd = document.getElementById("fornoyd").value
    let hobby = document.getElementById("hobby").value
    let beskrivelse = document.getElementById("beskrivelse").value

    const summaryText =
    <h3>Oppsummering</h3>
    <p>navn:${navn}</p>
    <p>alder:${alder}</p>
    <p>epost:${epost}</p>
    <p>fodsel:${fodsel}</p>
    <p>farge:${farge}</p>
    <p>fornoyd:${fornoyd}</p>
    <p>hobby:${hobby}</p>
    <p>beskrivelse:${beskrivelse}</p>
    ;

    document.getElementById("summary").innerHTML = summaryText



}
