const PLAYER = document.querySelector('h2')

//playerOne is a boolean so that if true, the innertext will be either X or O
let playerOne = true
playerOne === true ? 'X' : 'O'

document.querySelector('td').addEventListener('click', playerOne())

function playerOne() {
  PLAYER.innerHTML = "Player One's Turn"
  PLAYER.style.color = 'red'
  playerOne = true
  playerTwo()
}

function playerTwo() {
  PLAYER.innerHTML = "Player Two's Turn"
  PLAYER.style.color = 'blue'
  playerOne = false
  playerOne()
}
//TODO: add values to tds in html and then create an array of 'winning' combinations to check against
function checkWinner() {}
