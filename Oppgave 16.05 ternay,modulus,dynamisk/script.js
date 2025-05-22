// Oppgave1

function numberBtn() {
    let divNumber = document.getElementById("inputNumber").value
    let isNumber

    if (divNumber % 2 == 0) {
        isNumber = `${divNumber} er et partall`
    } else {
        isNumber = `${divNumber} er ikke et partall`
    }

}

//Oppgave2

function checkBtn() {
    let theNumberOne = parseFloat(document.getElementById("numberOne").value)
    let theNumberTwo = parseFloat(document.getElementById("numberTwo").value)

    let checkNumbers

    if (theNumberOne > theNumberTwo) {
        checkNumbers = `${theNumberOne} is bigger than ${theNumberTwo}`
    } else if (theNumberOne < theNumberTwo) {
        checkNumbers = `${theNumberOne} is bigger than ${theNumberTwo}`
    } else if (theNumberOne === theNumberTwo) {
        checkNumbers = `${theNumberOne} has the same value as ${theNumberTwo}`
    } else {
       checkNumbers = "Please white in a valid number"
    } 
    document.getElementById("checkDisplay").innerHTML = checkNumbers
}

//Oppgave 3 

function monthBtn() {
    let checkMonth = document.getElementById("monthInput").value
    const formattedMonth = checkMonth.charAt(0).toUpperCase() + checkMonth.slice(1).toLowerCase()
    let monthAnswer = ""


    if (["January", "March", "May", "July", "August", "October", "December"].includes(formattedMonth)) {
        monthAnswer = `${formattedMonth} has 31 days.`;
    } else if (["April", "June", "September", "November"].includes(formattedMonth)) {
        monthAnswer = `${formattedMonth} has 30 days.`;
    } else if (formattedMonth === "February") {
        monthAnswer = `${formattedMonth} has 28 or 29 days.`;
    } else {
        monthAnswer = "Please enter a valid month.";
    }
    document.getElementById("monthDiv").textContent = monthAnswer
}

// Oppgave 4

let numbers = []

function addBtn() {
    const input = document.getElementById("addInput")
    const value = parseFloat(input.value)

    if (!isNaN(value)) {
        numbers.push(value)

        document.getElementById("addDiv").innerText = "numbers: " + numbers.join(",")
  

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length

    document.getElementById("addDiv").innerText += 
    `\nAverage: ${average.toFixed(2)}`;  
}
 else {
    document.getElementById("addDiv").innerText = "Write in a valid number bozo"

input.value = "";
input.focus();
}
}

//Oppgave 5

let andebyere = ["Ole", "Dole", "Doffen", "Donald", "Dolly"]

function andebyBtn() {
    let andebybefolkning = "<ol>"

    for(let i = 0; i < andebyere.length; i++) {
        andebybefolkning+= `   
        <li>${andebyere[i]}</li> `
    }

    andebybefolkning += "</ol>"

    document.getElementById("listeDiv").innerHTML = andebybefolkning
}

//Oppgave 6 vente?

//EkstraOppgave 1 ikke ferdig

const unorderedListBtn = document.querySelector("#unorderedListBtn")
let listeTall

unorderedListBtn.addEventListener("click", function() {

    let listeTall = document.createElement("ol")
    listeTall.setAttribute((int)(Math.random() * 101))
    document.body.appendChild(listeTall)

    



})

//Ekstraoppgave 2 holder på

const inputField = document.querySelector("#textArea")
const textAreaBtn = document.querySelector("textAreaBtn")
const displayField = document.querySelector("#displayTextArea")

textAreaBtn.addEventListener("click", function () {
    const inputFieldValue = inputField.value
    displayField.appendChild(inputFieldValue)

    inputField.value =""



})