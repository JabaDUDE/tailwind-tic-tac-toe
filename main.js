//TODO: Change 'X' and 'O' to images
//status display for current player
const STATUS_DISPLAY = document.querySelector('h2')
const BUTTON = document.querySelector('button')
BUTTON.addEventListener('click', gameRestart)
//A way to stop game from moving forward if someone wins or a draw happens
let gameActive = true

//keep track of current player
let currentPlayer = 'X'
//Way to track current game moves, empty strings to keep track of cells that have been played
let gameState = ['', '', '', '', '', '', '', '', '']

//Messages for end game
let winningMessage = () => `Player ${currentPlayer} WINS!`
let drawMessage = () => `Game is a DRAW!`
let currentPlayerTurn = () => `${currentPlayer}'s turn!`

//Display the initial message
STATUS_DISPLAY.innerHTML = currentPlayerTurn()

//functions to handle clicks
function cellClick(cellClicked) {
  //save clicked cell
  let clickedCell = cellClicked.target
  //grab the value of the clicked cell
  let clickedCellValue = parseInt(clickedCell.getAttribute('value'))
  console.log(clickedCellValue)
  //check whether the cell has already been played or game is paused
  if (gameState[clickedCellValue] !== '' || gameActive === false) {
    return
  }
  //If everything checks out, continue with everything else.
  handleCellClick(clickedCell, clickedCellValue)
  checkWin()
}

function handleCellClick(clickedCell, clickedCellValue) {
  //update game state array with current player
  gameState[clickedCellValue] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}
//check if current player has won or not
const WINNINGS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function checkWin() {
  let gameWon = false
  for (let i = 0; i <= 7; i++) {
    let winCondition = WINNINGS[i]
    let a = gameState[winCondition[0]]
    let b = gameState[winCondition[1]]
    let c = gameState[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      gameWon = true
      break
    }
  }
  if (gameWon) {
    STATUS_DISPLAY.innerHTML = winningMessage()
    gameActive = false
    return
  }
  //check if there are still values in game state without the value of a player X or O
  let draw = !gameState.includes('')
  if (draw) {
    STATUS_DISPLAY.innerHTML = drawMessage()
    gameActive = false
    return
  }
  //if we get here, it means no one won and it is not a draw so it needs to switch to next player
  playerChange()
}
//player change
function playerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  STATUS_DISPLAY.innerHTML = currentPlayerTurn()
}
//game restart
function gameRestart() {
  gameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']
  STATUS_DISPLAY.innerHTML = currentPlayerTurn()
  document
    .querySelectorAll('[data-cell]')
    .forEach((cell) => (cell.innerHTML = ''))
}
///add event listeners to cells
document
  .querySelectorAll('[data-cell]')
  .forEach((cell) => cell.addEventListener('click', cellClick))
