//Oppgave 1

let arrayOne = []

const inputEl = document.getElementById("textAreaOne")
const btnOne = document.getElementById("btnOne")

btnOne.addEventListener("click", function() {

    const inputValue = parseInt(inputEl.value)

    if (!isNaN(inputValue)) {
        arrayOne.push(inputValue)
        inputEl.value = ""

        const message = alder(inputValue)
        document.getElementById("divDisplayOne").textContent = message

    } else {
        document.getElementById("divDisplayOne").textContent =
        "skriv inn et gyldig tall"
    }

})

function alder(age) {
    const display = document.getElementById("divDisplayOne")

    if (age < 12) {
        return "Du er en unge"

    } else if (age <= 19) {

        return "Du er en tenåring"

    }    else if (age <= 66) {

        return "Du er voksen"

    }   else {

        return "Du er et fosil"
    }
}

/*Oppgave2  skal fungere men finner ikke btnTwo? se senere, kanskje putte 
InputOne og Two utenfor/andre steder?*/

let arrayTwo = []

document.addEventListener('click', function() {
    const numberInputOne = document.getElementById("number-input-one")
    const numberInputTwo = document.getElementById("number-input-two")
    let btnTwo = document.getElementById("btn-two")

    btnTwo.addEventListener("click", function() {
        console.log("Button clicked");

        const inputValueOne = parseInt(numberInputOne.value)
        const inputValueTwo = parseInt(numberInputTwo.value)

        console.log(inputValueOne, inputValueTwo); 

        if (!isNaN(inputValueOne) && !isNaN(inputValueTwo)) {
            console.log("Input values are valid");
            arrayTwo.push(inputValueOne, inputValueTwo)

            numberInputOne.value = ""
            numberInputTwo.value = ""

            const message = numbers(inputValueOne, inputValueTwo)
            document.getElementById("divDisplayTwo").textContent = message
        } else {
            console.log("Invalid input");
            document.getElementById("divDisplayTwo").textContent =
                "skriv inn et gyldig tall"
        }
    })
})

function numbers(inputValueOne, inputValueTwo) {
    if (inputValueOne > inputValueTwo) {
        return `${inputValueOne} is bigger than ${inputValueTwo}`
    } else if (inputValueOne < inputValueTwo) {
        return `${inputValueOne} is smaller than ${inputValueTwo}`
    } else {
        return `${inputValueOne} has the same value as ${inputValueTwo}`
    }
}

//Oppgave 3

function arealBtn