//Oppgave1

function tippeBtn() {
    let tippet = document.getElementById("tippeInput").value
    let tippetTxt

    if (tippet ==="H") {
        tippetTxt = "du tippet på hjemmelaget"
    } else if (tippet === "U") {
        tippetTxt = "Du tippet på uavgjort"
    } else if (tippet === "B") {
        tippetTxt = "Du tippet på bortelaget"
    } else {
        tippetTxt = "Venligst skriv inn riktig input"
    }
    document.getElementById("tippeTxt").innerHTML = tippetTxt
}

//Oppgave 2

function tippeBtn () {
    let tippet = document.getElementById("tippeInput").value
    let tippetTxt

    switch (tippet) {
        case "H":
            tippetTxt = "du tippet på hjemmelaget"
            break;
        case "U":
            tippetTxt = "Du tippet på uavgjort"
            break;
        case "B":
            tippetTxt = "Du tippet på bortelaget"
            break;
        default:
            tippetTxt = "Venligst skriv inn riktig input"
    }
}

//Oppgave3 

function tippeBtn () {
    let tippet = document.getElementById("tippeInput").value.trim().toUpperCase()
    let tippetTxt

    switch (tippet) {
        case "H":
            tippetTxt = "du tippet på hjemmelaget"
            break;
        case "U":
            tippetTxt = "Du tippet på uavgjort"
            break;
        case "B":
            tippetTxt = "Du tippet på bortelaget"
            break;
        default:
            tippetTxt = "Venligst skriv inn riktig input"
    }
}

//Oppgave 4 

function bmiBtn() {

    const userWeight = parseFloat(document.getElementById("inputWeight").value);
    const userHeight = parseFloat(document.getElementById("inputHeight").value);

    if (userHeight <= 0 || isNaN(userWeight) || isNaN(userHeight)) {
        document.getElementById("bmiDiv").innerText = "Vennligst skriv inn gyldige tall.";
        return;
    }


    const bmi = userWeight / (userHeight * userHeight)
    const roundedBmi = bmi.toFixed(2)

    let category = ""
    if (bmi < 18.5) {
        category = "Undervektig"
    } else if (bmi < 24.9) {
        category = "Normal vekt"
    } else if (bmi < 29.9) {
        category = "Overvektig"
    } else {
        category = "Fedme"
    }

    document.getElementById("bmiDiv").innerText = `Din BMI er ${roundedBmi} (${category})`
}


// Oppgave 5

function dateBtn() {
    let userDate = document.getElementById("dateInput").value

    
    document.getElementById("dateDiv").innerText = ${"Du skrev inn"} ${userDate}

}