// alert ("help!!!!!!!");

/*----- constants -----*/
// 1.1 null is when the square is empty
// colors value represents the color to display for each key
 const colors = {
    'null' : "grey",
    'player1' : 'yellow',
    'player2' : 'purple',
 }

 const playerX = 'x';
 const playerO = 'o';

//  1.2 8 possible winning combinations - three indexes of the board
// const winningCombo = {
//     'horizontalTopRow' : [1, 2, 3],
//     'horizontalMidRow' : [4, 5, 6],
//     'horizontalBotRow' : [7, 8, 9],
//     'verticalTopRow' : [1, 4, 7],
//     'verticalMidRow' : [2, 5, 8],
//     'verticalBotRow' : [3, 6, 9],
//     'diagonalLeft' : [1, 5, 9],
//     'diagonalRight' : [3, 5, 7],
// }

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
   
/*----- app's state (variables) -----*/
// 2.1  board array represents the squares
let boardArray = [];

// 2.2 turn  variables: to remember whose turn it is
let turn;

//????? 2.3 winner variable: represent three different possibilities - player that won, a tie, or game in play
let winner = {
    'won' : 1,
    'tie' : 'T',
    'gameInPlay' : null,
};

/*----- cached element references -----*/
// 3.1 storing 9 squares elements to squares variable (selecting all)
let squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
squares = document.querySelectorAll('squares');
console.log(squares);





/*----- event listeners -----*/


/*----- functions -----*/
// 4.1 initializing state variable
// 4.1.1 setting board squares to null, initializing turn, & winner is null
function startGame () {
    // board = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
    boardArray = [null, null, null, null, null, null, null, null, null]
    // board = [colors.null, colors.null, ]
    squares = boardArray;
    turnMove ();
    winning = null;
};

// a turn function
function turnMove () {
    const one = "Player X";
    const negOne = "Player O";
};

// winning function
function winning () {
    if (winner !== null) {
        return 'game is still in progress'
    } else is (winner === "T"){
        console.log("It's a tie") 
    } else {
        console.log('Winner!'); 
    }
};

function tie () {};

// 4.2 Render those state variables to the page:
// 4.2.1 board function
function gameBoard () {
    for (let i = 0; i < squares.length; i++ ) {
        squares[i] = colors.
    }
}

function resetGame() {};


