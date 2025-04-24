/*Oppgave1 a*/
/*
let a

a = 3.14
a = "Porsche"
console.log(a)
//let a = 25 a has already been declared
*/
/*Oppgave1 b*/

//const b
//console.log(b)// ikke mye logges ut
//const c = 1

c = "virder dette da?"//bare om du har kun en c

console.log(c)

/*Oppgave2*/

        // oppretter en ny variabel med navnet 'a', og setter verdien til å være 10.
        // siden variabelen opprettes med nøkkelordet 'let' kan verdien endres senere.
        let a = 10;

        {
            // oppretter enda en variabel med samme navn som over! Hvorfor er det lov?
            let a = 20;
            // ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
            console.log(a, "fra innerst")
        }

        // ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
        console.log(a)

//Det fungerer fordi bare en let = a eksisterer utenfor {} og bare en eksisterer inni

/*Oppgave3*/

function hentVerdier() {
    let text = document.getElementById("inputText").value
    let textAreaText = document.getElementById("textArea").value

    let colour = document.getElementById("colour").value
    let date = document.getElementById("datetime").value
    let num = document.getElementById("number").value
    let serch = document.getElementById("search").value

    let yourInfoDiv = document.getElementById("yourInfo")
     
    yourInfoDiv.innerHTML =
    text + " " + textAreaText + " " + colour + " " + date + " " + num + " " + serch

}
