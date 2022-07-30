// alert ("help!!!!!!!");

/*----- constants -----*/
// null is when the square is empty
// colors value represents the color to display for each key
 colors = {
    'null' : "grey",
    'player1' : 'yellow',
    'player2' : 'purple',
 }

//  const player1 = 'x';
//  const player2 = 'o';

//  8 possible winning combinations - three indexes of the board
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
//  board array represents the squares
let boardArray = [];

// state variables: 
let turn;
let winner = 
{
    'won' : '',
    'tie' : '',
    'gameInPlay' : '',
};

/*----- cached element references -----*/
// let squares = document.querySelectorAll('.squares');




/*----- event listeners -----*/


/*----- functions -----*/
function startGame () {};
