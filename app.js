const allButtons = document.querySelector(".buttons")
const calculatorScreen = document.querySelector("#screen")

let numberArray = []
let latestNumber = 0

let theEquation = []

allButtons.addEventListener("click", calculateStuff)

function calculateStuff(e) {
    let buttonElement = e.target
    if (buttonElement.className === "operator") {
        operatorFn(buttonElement)
    } else if (buttonElement.innerText) {
        numberEntry(buttonElement)
    } else {
        calculatorScreen.innerText = "ERROR"
    }
}

function numberEntry(buttonElement) {
    const newNumber = buttonElement.innerText
    numberArray.push(parseInt(newNumber))
    latestNumber = parseInt(numberArray.join(""))
    calculatorScreen.innerHTML = latestNumber
}

function operatorFn(buttonElement) {
    const sign = buttonElement.innerText
    if (sign === "C"){
        calculatorScreen.innerText = ""
        numberArray = []
        theEquation = []
    } else if (sign === "="){
        sumButton()
    } else {
        theEquation.push(parseInt(latestNumber), sign)
        numberArray = []
        latestNumber = 0
    }
}

function sumButton() {
    theEquation.push(latestNumber)
    let answer = 0
    for (let i = 0; i < theEquation.length - 1; i+= 2) {
        const a = theEquation[i]
        const operator = theEquation[i+1]
        const b = theEquation[i+2]

        answer = operationFunctions[operator](a, b)

        theEquation.splice(i+2, 1, answer)

    }

    latestNumber = answer
    numberArray = []
    theEquation = []
    calculatorScreen.innerHTML = answer
}


const operationFunctions = {
        "+": function(x, y) {return accumulator = x + y},
        "-": function(x, y) {return accumulator = x - y},
        "÷": function(x, y) {return accumulator = x / y},
        "x": function(x, y) {return accumulator = x * y},
}


document.addEventListener('keydown', numberKey)

function numberKey(e) {
    const newNumber = parseInt(e.key)
    if (newNumber){
        numberArray.push(parseInt(newNumber))
        latestNumber = parseInt(numberArray.join(""))
        calculatorScreen.innerHTML = latestNumber
    }
}