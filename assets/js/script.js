
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
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveTranda()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert(result + ' is not Enough. MORE!')

        //TODO restart
        // result = 0
        // document.querySelector('.score').textContent = 0
        // currentTime = 10
        // document.querySelector('#time-left').textContent = 10

    }
}

let timerId = setInterval(countDown, 1000)