//Oppgave1 a

let i = 1
let result = ""

while ( i <= 1238) {
    i++; 

}

result = `Løkken hår nå nådd ${i} <br>`
 document.getElementById("oppgaveEnDivA").innerHTML = result

 //Oppgave 1 b

sum = 0 
tall = 0 
while ( sum < 2250) {
    sum += tall
    tall += 2 
}


partall = sum 

 document.getElementById("oppgaveEnDivB").innerHTML = partall

 // Oppgave 2

 function oppgaveToDiv() {
    let utskrift = document.getElementById("oppgaveToTable")
    let tall1, tall2, produkt
    let tabell = "<table style ='width:500px'>"

    for (tall1 = 10; tall1 <=19; tall1++){
        tabell += "<tr>"

        for (tall2 = 10; tall2 <=19; tall2 ++){
            produkt = tall1 * tall2
            tabell+= "<td>" + produkt + "</td>"
        }
        tabell += "</tr>"
    }
    tabell += "</table>"

    utskrift.innerHTML = tabell
 }

 // Oppgave 3

 function oppgaveTreDiv() {
    let utskrift = document.getElementById("oppgaveTreTable")
    let tall1, tall2, produkt
    let tabell = "<table style ='width:500px'>"

    for (tall1 = 10; tall1 <=19; tall1++){
        tabell += "<tr>" 
        if (tall1 = tall1) {
            tall1 ="***"
        }

        for (tall2 = 10; tall2 <=19; tall2 ++){
            produkt = tall1 * tall2
            tabell+= "<td>" + produkt + "</td>"
            if (tall2 = tall2) {
                tall2 ="***"
            }
        }
        tabell += "</tr>"
    }
    tabell += "</table>"

    utskrift.innerHTML = tabell
 }

 //Oppgave 4 

function oppgaveFireBtn() {
    let tall 
    let tekst = "green bottles, hanging on the wall,"
    let tekst2 = "If 1 green bottle were to accidentally fall"


    for (tall = 10; tall > 0; tall++) {
        if (tall === 0 ) {
            "there are no more beers"
        }
    }
    let tall2 = tall - 1
    let tekst3 = `There'd be ${tall2} tall green bottles, hanging on the wall`
    document.getElementById("oppgaveFireDiv").innerHTML = 
    `${tall} ${tekst} ${tall} ${tekst} ${tekst2}               `

}


//Oppgave 5 primtall

function oppgaveFemBtn() {
    let number = document.getElementById("oppgaveFemInput").value
    
    for
}
