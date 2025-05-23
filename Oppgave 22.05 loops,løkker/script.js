//Oppgave 1 +2

function partallBtn(){
    let result = ""

for (let i = 0; i <= 100 ; i++)
    if (i%2 == 0) {
    result +=`${i} er partall `
}   else {
    result += `${i} er et oddetall `
}

document.getElementById("partallDiv").innerHTML = result
}


//Oppgave 3

function deleligBtn() {
    let result = ""

    for (let i = 0; i <= 100 ; i++)
        if (i%5 == 0){
            result += `${i} er delelig med 5 `
        }


}

//Oppgave 4

function deleligFemOgPartall() {
    let result = ""
    for (let i = 0; i <= 100 ; i++) {
        if (i%5 == 0 && i%2 == 0){
            result += `${i} er delelig med 5 og er et partall <br> `
        }}
document.getElementById("femogPartall").innerHTML = result
}

//Oppgave 5 

function deleligOppgaveFem() {
    let result = ""
    for (let i = 0; i <= 100 ; i++) {
        if (i%8 == 0 || i%3 == 0) {
            result +=`${i} er delelig med 5 eller 3`
        }
    }
document.getElementById("oppgaveFemDiv").innerHTML = result

}

//Oppgave 6

function oppgaveseksBtn() {
    let textOne = document.getElementById("textOne")
    let antall = parseInt(document.getElementById("textTwo").value)
    let result = ""

    if (!isNaN(antall))
        for(let i = 0; i < antall; i ++) {
    result += `${textOne}`
    } else {
        "Skriv inn et gyldig tall I felt to"
    }


    
    document.getElementById("oppgaveSeksPara").innerHTML = result
}

//Oppgave 7

function gangesMedsegselvBtn() {
    let result = ""
    
    for (let i=0; i <= antall; i ++) {
        result += `${i}x${i}=${i*i} <br>`
    }
    document.getElementById("gangesMedSegSelvDiv").innerHTML = result
}

//Oppgave 8

function variereBtn() {
    let i = 7
    let result = ""

    while ( i <= 1) {
        result += `Jeg er tall nummer ${i} <br>`;
        i++;
    }
document.getElementById("variereDiv").innerHTML = result
}

//OPpgave 9 

function oppgaveNiBtn() {
    let i = 98
    result = ""

    while (i <= 12) {
        if (i%5 == 12)
        result += `Jeg er tallet ${i}<br>`;
        i++;
    }

document.getElementById("oppgaveNiDiv").innerHTML = result
}

//Oppgave 10

function mellomXOgYBtn() {
    let x = parseInt(document.getElementById("talletX").value)
    let y = parseInt(document.getElementById("talletY").value)
    result = ""

    if (!isNaN(x)&& !isNaN(y) && x < y){
        for(let i = x; i <= y; i++) {
    result += `${i} <br>`
    } 
    document.getElementById.("mellomXOgDiv").innerHTML = result
    
    else {

    } document.getElementById.("mellomXOgDiv").innerHTML = 
    "Ugyldige tall. Sørg for at X er mindre en Y"
}
}