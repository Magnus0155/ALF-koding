// Oppgave 1 a

tallArray = []
const min = 0
const max = 100

for (let i = 0; i < 15; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min +1)) + min
    tallArray.push(randomNumber)
}

console.log(tallArray)

function skrivUtTall(randomNumber) {
    console.log(randomNumber)
}

tallArray.forEach(skrivUtTall)

// b

let desimalArray = []


for ( let i = 0; i <10 ; i++) {
    const tilfeldigDesiamlTall = Math.random()
    desimalArray.push(tilfeldigDesiamlTall)
}

let skrivUt = function(element) {
    console.log(element)
};


desimalArray.forEach(skrivUt)

//c

const kattenavn = ["RatKillah", "Pablo", "Tortuga", "Melekalikimaka", "Bob", 
    "FullSend", "Terminator", "Joreuz", "Stizzy", "ApparentlyJack"]

kattenavn.forEach(function(navn){
    console.log(navn)
})

//d

kattenavn.map(navn => {
    console.log(navn)
});

// Oppgave 2 a 

tallArray.sort((a,b) => a - b)
console.log(tallArray)

const toSortedRandom = tallArray.toSorted((a,b) => a - b)
console.log(tallArray)

// b

tallArray.sort((a,b) => b - a)
console.log(tallArray)

const toSortedRandomReverse = tallArray.toSorted((a,b) => b - a)
console.log(tallArray)