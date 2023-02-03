const PLAYER = document.querySelector('h2')

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
function checkWinner() {
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
}

//iterate over squares

let allSquares = document.querySelectorAll('td div')

allSquares.forEach((square) => {
  square.addEventListener('click', () => {
    if (playerOneTurn === true) {
      square.innerHTML = 'X'
      firstPlayerMoves.push(square.value)
      playerTwo()
    } else {
      square.innerHTML = 'O'
      secondPlayerMoves.push(square.value)
      playerOne()
    }
    //   playerOneTurn === false
    //     ? ((e.innerHTML = 'O'), playerTwo(), console.log(playerOneTurn))
    //     : ((e.innerHTML = 'X'), playerOne(), console.log(playerOneTurn))
  })
})

//conditional to be used to check if the value of td is null or not.

//TODO: need to figure out how to store the moves that are made by each player and then compare it to the winning subarrays.
