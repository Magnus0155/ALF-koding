/*Oppgave1 - b enkel men fungerer*/

const bruker = "JohnSnow"
const pass = "supaHhemmelige345Greier!"

function loggInn() {



    if (pass==="supaHhemmelige345Greier!"&&bruker==="JohnSnow"){
        document.getElementById("resultat").innerHTML = "riktig"
        document.getElementById("resultat").style.backgroundColor = "green"

    }

        else{
            document.getElementById("resultat").innerHTML = "feil"
            document.getElementById("resultat").style.backgroundColor = "red"
        }
 
}

/*Oppgave2*/

function emailBtn() {
    let fornavn = document.getElementById("textOne").value
    let mellomnavn = document.getElementById("textTwo").value
    let etternavn = document.getElementById("textThree").value

    let gmail = "" 

    document.getElementById("emailResult").innerHTML = gmail

    if (mellomnavn =="") {

    gmail = fornavn + etternavn.substring(0, 2) + "gmail.com"
}   else {
    gmail = fornavn + mellomnavn + etternavn + "gmail.con"
}
}

//Oppgave3

let alder = document.getElementById("age").value

function prisBtn() {
    if (alder < 12) {
        document.getElementById("pris").innerHTML = "Du 12 eller under og får 50% rabatt"
    } else if (alder > 67){
        document.getElementById("pris").innerHTML = "Du er voksen og får ingen rabatt"
        } else (alder < 67) {
            document.getElementById("pris").innerHTML = "Du får pansjonistrabatt siden du er 67 eller over"
        }
}