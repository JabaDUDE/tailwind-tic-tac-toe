const PLAYER = document.querySelector('h2')

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
function checkWinner() {}

// allSquares.value = null

//iterate over squares

let allSquares = document.querySelectorAll('td div')

allSquares.forEach((square) => {
  square.addEventListener('click', () => {
    if (playerOneTurn === true) {
      square.innerHTML = 'X'
      playerTwo()
    } else {
      square.innerHTML = 'O'
      playerOne()
    }
    //   playerOneTurn === false
    //     ? ((e.innerHTML = 'O'), playerTwo(), console.log(playerOneTurn))
    //     : ((e.innerHTML = 'X'), playerOne(), console.log(playerOneTurn))
  })
})

//conditional to be used to check if the value of td is null or not.
