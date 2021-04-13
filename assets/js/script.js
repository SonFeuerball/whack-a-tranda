
const square = document.querySelectorAll('.square')
const tranda = document.querySelectorAll('.tranda')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('tranda')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('tranda')

    //randomposition has to be the hit position
    hitPosition = randomPosition.id
}

square.forEach(element => {
    element.addEventListener('mouseup', () => {
        if (element.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveTranda() {
    let squareTimerId = null
    squareTimerId = setInterval(randomSquare, 400)
}

moveTranda()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert(result + ' is not Enough. MORE!') ? "" : window.location.reload()
    }
}

let timerId = setInterval(countDown, 1000)