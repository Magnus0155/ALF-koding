/*Oppgave1*/
let a = 5
let b = 7.5
let c = 10
const d = 12.5
const e = 15

 console.log(a*b)
/* Oppgave2 
 window.onload = function () {
 let navn = prompt("SKriv inn ditt navn")
 let favorittFarge = prompt("Skriv inn din favorittfarge")
 let svar = "hei" + navn+ "er din favorittfarge" + favorittFarge+"?";

 document.getElementById("spørsmål").innerText = svar
}

Må ha JS src etter html for å fungere. løse etterpå
*/

/*Opppgave3*/
function navn() {
let forNavn = document.getElementById("fornavn").value
let mellomNavn = document.getElementById("mellomnavn").value
let etterNavn = document.getElementById("etternavn").value

let fulltNavn = forNavn + " " + mellomNavn + " " + etterNavn

document.getElementById("fulltnavn").textContent = fulltNavn

}

/*Oppgave4 */

function firstImg() {
    document.getElementById("myImg")
    .src="Images/Img2.jpg"
}

function secondImg() {
    document.getElementById("myImg")
    .src="Images/Img3.jpg"
}

function thirdImg() {
    document.getElementById("myImg")
    .src="Images/Img4.jpg"
}

/*Oppgave5 */


function btnOne() {
    document.getElementById("one").style.color = "red"

}

function btnTwo() {
    document.getElementById("two").style.color = "green"

}

function btnThree() {
    document.getElementById("three").style.color = "blue"

}

function btnFour() {
    document.getElementById("four").style.color = "orange"

}

/*Oppgave6*/

function myTextInput() {
    let text = document.getElementById("textInput").value
    document.getElementById("echo").innerHTML = "Du Skrev: " + text
}






























