const PLAYER = document.querySelector('h2')
let allSquares = document.querySelectorAll('[data-cell]')

const X_CLASS = 'X'
const CIRCLE_CLASS = 'O'

let firstPlayerMoves = []
let secondPlayerMoves = []
//playerOneTurn is a boolean so that if true, the innertext will be either X or O
let playerOneTurn = true

function playerOne() {
  playerOneTurn = true
  PLAYER.innerHTML = "Player One's Turn"
  PLAYER.style.color = 'red'
}

function playerTwo() {
  playerOneTurn = false
  PLAYER.innerHTML = "Player Two's Turn"
  PLAYER.style.color = 'blue'
}
//TODO: add values to tds in html and then create an array of 'winning' combinations to check against

const winnings = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

//iterate over squares

allSquares.forEach((square) => {
  square.addEventListener('click', () => {
    if (playerOneTurn === true) {
      square.innerHTML = X_CLASS
      square.classList.add(X_CLASS)
      firstPlayerMoves.push(square.value)
      checkWin('X')
      playerTwo()
    } else {
      square.innerHTML = CIRCLE_CLASS
      square.classList.add(CIRCLE_CLASS)
      secondPlayerMoves.push(square.value)
      checkWin('O')
      playerOne()
    }
  })
})

//TODO: need to figure out how to store the moves that are made by each player and then compare it to the winning subarrays.

function checkWin(currentPlayer) {
  return winnings.some((combination) => {
    return combination.every((index) => {
      if (allSquares[index].classList.contains(currentPlayer)) {
        return (PLAYER.innerHTML = `${currentPlayer} WINS!`)
      }
    })
  })
}
