document.addEventListener("DOMContentLoaded", domLoaded())

function domLoaded () {
    const buttonBox = document.querySelector(".buttons")
    const buttons = Array.from(buttonBox.children)
    buttons.forEach (button => {
        button.addEventListener("click", (e) => {
            appendToScreen(e)
        })
    })
}

function appendToScreen (e) {
    const screen = document.getElementById('screen')
    buttonValue = e.target.innerText
    number = parseInt(buttonValue, 10)
    if (number || number === 0) {
        appendNumbers(number)
    } else if (buttonValue === 'C') {
        screen.innerText = ""
    }else if (buttonValue === '=') {
        screen.innerText = storedNum
    } else {
        operand(e, screen, buttonValue)
    }
}

let storedNum = 0
let mathOperator = ''

function appendNumbers(number){
    const screen = document.getElementById('screen')
    let calcScreen = document.getElementById('screen').innerText.split("")
    if (calcScreen.length === 0) {
        screen.innerText = number
    } else {
        numberJoin(number, screen, calcScreen)
    }
}

function numberJoin(number, screen, calcScreen){
    calcScreen.push(number)

    let [a, ...rest] = calcScreen
    let newScreen = [parseInt(a), rest]

    if (!newScreen[0]){
        mathHappens(number, screen, a)
    } else {
        let display = newScreen.flat().join('')
        screen.innerText = display
    }

}

function operand(e, screen, buttonValue){
    storedNum = parseInt(screen.innerText)
    screen.innerText = buttonValue
    mathOperator = buttonValue
}


function mathHappens (number, screen, a){
        const display = doMath[a](storedNum, number)
        screen.innerText = display
        storedNum = display
}

const doMath = {
    '+': function(x, y) {return x + y},
    '-': function(x, y) {return x - y},
    'x': function(x, y) {return x * y},
    '÷': function(x, y) {return x / y}
    }