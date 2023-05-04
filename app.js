const squares = document.querySelectorAll('.content .square')
const score = document.querySelector('#score')
const timer = document.querySelector('#time')

let result = 0
let hitPosition
let timerId = null
let timeDown = 60

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })

    let squarePosition = squares[Math.floor(Math.random() * squares.length)]
    squarePosition.classList.add('mole')
    hitPosition = squarePosition.id
}

squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition) {
           result++
           score.textContent = result
           hitPosition = null
        }
    })
})

function moveMole() {
   timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
   timeDown--
   timer.textContent = timeDown
   if(timeDown === 0) {
      clearInterval(timerId)
      clearInterval(timerDownId)
      alert(`Game Over! Your Final Score Is ${result} Point`)
   }
}

let timerDownId = setInterval(countDown, 1000)

