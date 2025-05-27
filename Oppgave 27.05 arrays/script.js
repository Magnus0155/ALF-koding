//Oppgave1



function arrayOneBtn() {

let tall = [34,53,2,3,34,26,26,85,3,4,98,2,12]

    let fremmoverListe = "<h3>Fremover:</h3> <ol>"
    let BakvendtListe = "<h3>Bakover:</h3> <ol>"
    let annethvert = "<h3>Annethvert:</h3> <ol>"
    let tiPluss = "<h3>Ti eller større:</h3> <ol>"
    let partall = "<h3>Partall:</h3> <ol>"
    let visSum = "<h3>Summen av tallene:</h3><ol>"
    let primtall = "<h3>Primtall</h3><ol>"


    //fremListen a
    for( let i = 0; i < tall.length; i ++) {
        fremmoverListe += `
        <li>${tall[i]}</li>`
    }
    fremmoverListe += "</ol>"

    //bakListen b

    for(let i = tall.length - 1; i >= 0; i--) {
        BakvendtListe += 
        `<li>${tall[i]}</li>`
    }
    BakvendtListe +="</ol>"

    //annethvertListe c 
    for (let i = 0; i < tall.length; i += 2) {
        annethvert +=
        `<li>${tall[i]}</li>`
    }
    annethvert += "</ol>"

    //Ti og større d
    for( let i = 0; i < tall.length; i++) {
        if (tall [i] >= 10) {
            tiPluss += 
            `<li>${tall[i]}</li>`
        }
    }
    tiPluss += "</ol>"

    //partall e 
    for ( let i = 0; i < tall.length; i++) {
        if (tall [i] % 2 === 0) {
            partall += `<li>${tall[i]}</li>`
        }
    }

    partall += "</ol>"

    //Sum f
    let sum = 0
    for (let i = 0; i < tall.length; i++) {
        sum += Number(tall[i])
    }

    visSum += `<li>${sum}</li>`
    visSum += "</ol>"

    //primtall g
    function erPrimtall(n) {
        if (n <= 1) return false
        if (n ===2) return true
        if (n % 2 === 0) return false
    
 
    for ( let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i ===0) return false

    }
    return true
    }

    for (let i = 0; i < tall.length; i++) {
        if (erPrimtall(tall[i])) {
            primtall += `<li>${tall[i]}</li>`;
        }
    }

    primtall += "</ol>"

    document.getElementById("arrayDiv").innerHTML = 
    fremmoverListe + BakvendtListe + annethvert + tiPluss
    + partall + visSum + primtall

}


function arrayTwoBtn() {
let tall = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12]

    let summen = "<h3>Summen av tallene:</h3><ol>"
    let negativeTall = "<h3>Alle negative tallene:</h3><ol>"
    let gjennomsnitt = "<h3>Gjennomsnitt av tallene</h3>"
    let minsteTall = "<h3>Minste tallet i arrayen</h3>"
    let partallSumm = "<h3>Summen av alle partallene</h3>"

    // Summen av tallene a 
    let sum = 0
    for (let i = 0; i < tall.length; i++) {
        sum += Number(tall[i])
    }

    summen += `<li>${sum}</li>`
    summen += "</ol>"

    // alle negative tall b
    for (let i = 0; i < tall.length; i++) {
        if (tall [i] <= -1) {
            negativeTall += 
            `<li>${tall[i]}</li>`
        }

    }
    negativeTall += "</ol>"

    // gjennomsnitt av tallene c
    let nmbr = 0
    for (let i = 0; i < tall.length; i++) {
        nmbr += tall[i]
    }
    gjennomsnitt = `<p>${(nmbr / tall.length).toFixed(2)}</p>`

    // Finn minste tallet i arrayen  d
    
    let minste = tall[0] 
        for(let i = 0; i < tall.length; i++) {
            if (tall[i] < minste) {
                minste = tall[i]
        }
    }
    minsteTall += `<P>${minste}</p>`

    // Summen av partallene i arrayen e

    let partaller = 0
    for (let i = 0; i < tall.length; i++) {
        if  (tall [i] % 2 === 0) {
            partaller += Number(tall[i])
        }
    }
    partallSumm += `<p>${partaller}</p>`


    document.getElementById("arrayTwoDiv").innerHTML = 
    summen + negativeTall + gjennomsnitt + minsteTall + partallSumm
}

function arrayThreeBtn() {
    let tall = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3]
    // Tabell av tall og hor mange a
    // teller hendelser
    let counts = {}
    for (let num of tall) {
        counts[num] = (counts[num] || 0) + 1
    }

    // keys
    let sortedNumbers = Object.keys(counts).sort((a, b) => a - b)

    // Lage tabell, skill even:odd for å farge i css
    let tableHTML = '<table border="1" cellpadding="5"><thead><tr><th>Number</th><th>Count</th></tr></thead><tbody>'

    for (let number of sortedNumbers) {
        let rowClass = (number % 2 === 0) ? 'even' : 'odd'
        tableHTML += `<tr class ="${rowClass}"><td>${number}</td><td>${counts[number]}</td></tr>`
    }

    tableHTML += '</tbody></table>'


  
    document.getElementById('arrayThreeDiv').innerHTML = tableHTML;
}

function arrayFourBtn() {
    const dagerIMåned = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



    
}