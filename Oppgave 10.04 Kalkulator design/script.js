function addToDisplay(value) {
    document.getElementById('display').value += value
}

function clearDisplay() {
    document.getElementById('display').value = ''
}




function special() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value)
    } catch (error) {
        document.getElementById('display').value = 'Error'
    }
    console.log("Button is clicked")
}

