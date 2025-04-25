/*Oppgave1*/


function visAlle() {
    let verdi = document.getElementById("numberInpt").value
    let number = parseFloat(verdi)

    document.getElementById("divHalvparten").innerHTML = number / 2
    document.getElementById("divDobbel").innerHTML = number * 2
    document.getElementById("divTredobbel").innerHTML = number * 3
    document.getElementById("divGangeMedSelv").innerHTML = number * number
}

/*Oppgave2 Fungerer men kan kanskje sette inn alret om false/flasy input*/

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

    document.getElementById("bmiSvar").innerHTML ="Basert på din høyde" +" "+høyde+" "+"og vekt"+ " "+vekt+" "+ "dinBMI er" + (vekt/(høyde*høyde))
}

/*Oppgave5*/

function lengthBtn() {
    let text = document.getElementById("textArea")
    let length = text.length

    document.getElementById("utskrift").innerHTML = length
}

function upperCaseBtn() {
    let text = document.getElementById("textArea")
    let length = text.toUpperCase()

    document.getElementById("utskrift").innerHTML = length
}

function lowerCaseBtn() {
    let text = document.getElementById("textArea")
    let length = text.toLowerCase();

    document.getElementById("utskrift").innerHTML = length
}

/*Oppgave6*/

function emailBtn() {
    let text1 = document.getElementById("fornavnText")
    let text2 = document.getElementById("etternavnText")
    let resultat = text1.concat(text2)

    document.getElementById("concDiv").innerHTML = resultat+"@email.com"
}