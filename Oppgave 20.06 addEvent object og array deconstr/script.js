// Oppgave 1

const button = document.querySelector('#myButton')

button.addEventListener('click', function(){
    console.log('Button is clicked')
    
})

function myButton() {
    let btn = document.createElement("button")
    btn.setAttribute("id", "minButton")
    btn.innerText = "ny knapp!"
    document.body.appendChild(btn)

    btn.addEventListener("click", function() {
        alert("Du har trykket på knappen!")
    })
}

const hoverBtn = document.querySelector('#hoverButton')

button.addEventListener("mouseover", function(){
    console.log('Button is clicked')
    this.style.backgroundColor = "yellow"
})


//Oppgave2 

//Lagt en array
let tall = [1, 2, 3]

//Destrukturere arrayen
let [1, 2, 3] = tall

//lette til et nytt tall i arrayen
flereTall = [...tall, "4"]

//Logge arrayen ut
console.log(flereTall)

//OPpgave 3
function ukjentTall(...tall) {
    let sum = 0 
    for (verdi of tall) {
        sum += verdi
    }
    return sum
}
console.log(ukjentTall(1,2,3))

//Oppgave 4






