//Oppgave1

function textBtn() {
    let text = document.getElementById("textArea").value

    let textBlank = ""

    if (text ==""){
        document.getElementById("textFeed") = "skriv inn navnet dit"
    } else {
        document.getElementById("textFeed") ="Hei"+text
    }
}

//Oppgav2

function numbersBtn() {
    let inputOne = parseFloat(document.getElementById("numbersOne").value)
    let inputTwo = parseFloat(document.getElementById("numbersTwo").value)
    let selectedValue = document.getElementById("options").value
    let result

    if (selectedValue ==="pluss") {
        result = inputOne + inputTwo
    } else if (selectedValue ="minus") {
        result = inputOne - inputTwo
    } else if (selectedValue ==="multiply") {
        result = inputOne * inputTwo
    } else (selectedValue ==="devide") {
        result = inputOne / inputTwo
    }
    document.getElementById("numbersFeed").innerHTML = result
}

//Oppgave3

function favColorBtn() {
    const red = document.getElementById("red").checked
    const green = document.getElementById("green").checked
    const blue = document.getElementById("blue").checked

    const answerDiv = document.getElementById("colorAnswer")

    if (red) {
        answerDiv.textContent = "Your favourite color is red"
    } else if (green) {
        answerDiv.textContent = "Your favourite color is green"
    } else if (blue) {
        answerDiv.textContent = "Your favourite color is blue"
    } else {
        answerDiv.textContent = "Select a color you muppet"
    }
}

//Oppgave 4 lengste oppgaves så langt, vent til senere

//Oppgave 5 

function displayBtn() {

    let list = document.forms[0]
    let listTxt = ""
    let i
    for (i=0; i < list.length; i++) {
        if (list[i].checked) {
            listTxt = listTxt + list[i].value + " "
        }
    }
    document.getElementById("displayDiv").value = "Your list contains: " + listTxt

}



