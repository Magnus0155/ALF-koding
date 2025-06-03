//Oppgave1
//a
let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59]
let highestNum = arr[0]

for (let s of arr) {
    if (s > highestNum) {
        highestNum = s
    }
}

console.log("The highest number is:", highestNum)
document.getElementById('output').textContent = 
"The highest number is: " + highestNum

//b

let sortedArr = [...arr].sort((a,b) => a - b)

console.log("Original:", arr)
console.log("Sortert:", sortedArr)

// c 

let reverseArr = [...arr].reverse((a,b) => a + b ) 

console.log("Original:", arr)
console.log("Reversed:", reverseArr)

//d + e

let  addArr = 92

arr.push(addArr)

console.log("With new number:", arr)
console.log("Added number:", addArr)

// f

let remove = arr.shift()

console.log("Removed:", remove)

//g

let notArr = "Hello Weeerld" /*Scouser*/

console.log(Array.isArray(arr))
console.log(Array.isArray(notArr))

// h 



let absolutteVerdier = arr.map(tall => Math.abs(tall))

console.log("Absoluttverdier:", absolutteVerdier)