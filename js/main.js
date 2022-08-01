// alert ("help!!!!!!!");

/*----- constants -----*/
 const playerX = 'X';
 const playerO= 'O';

//  1.2 8 possible winning combinations - three indexes of the board
const winningCombos = [
 // Horizontal
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 // Vertical
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 // Diagonal
 [0, 4, 8],
 [2, 4, 9]
];

// // Horizontal 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// // Vertical
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
// // Diagonal
//     [1, 5, 9],
//     [3, 5, 7]
// ];
   
/*----- app's state (variables) -----*/
// 2.1  board array represents the squares
let boardArray = [];
let playerXMoves = [];
let playerOMoves = [];
let winner = false;
let currentPlayer = true;
let board = ['', '', '', '', '', '', '', '', '']
let inPlay= false;



/*----- cached element references -----*/
// grabbing the squares, ID=0, and button from HTML
const squares = Array.from(document.querySelectorAll('.square'));
// const sqId0 = Array.from(document.getElementById('0'));
const button = document.querySelector('button');
// console.log(button);

// console.log(squares);
/*----- event listeners -----*/

// document.querySelectorAll('squares').addEventListener('click', sqClick);
// squares.addEventListener('click', sqClick);
button.addEventListener('click', resetGame);

/*----- functions -----*/

startGame();

/* three event listeners:
1- change turns when a square is clicked
2- see what square is clicked in the console
3- run resetGame function is clicked
*/
function startGame () {
    // playGame();
    const once = {
        once : true
      }
    squares.forEach(square => {square.addEventListener('click', changeTurns, once)}  );
    squares.forEach(square => { square.addEventListener('click', clicks)                      
 });
    button.addEventListener('click', resetGame);
    // inPlay = true;
    winner = false;
}

//see which square is clicked and I wanted to turn the div ID to an array element
// got this idea from someone online
function clicks (e) {
   console.log(e.target)
//    test.toArray
// trying to assign and add the square index to playerXMoves array
    // squares.forEach(click => {
    // for (let i = 0; i < squares.length; i++){
    //     console.log(playerXMoves.push(squares[i]));
    // };

    // console.log(playerXMoves);
    }

// switches the players' turn
function changeTurns () {
   if (currentPlayer === true) {
    this.innerText = 'X';
   } else {
    this.innerText ='O'
   }
   currentPlayer = !currentPlayer
   playGame();
};

// Not sure, I think I was trying to find a way to grab the players' moves
// use the moves to compare to winning combo options
function playGame (squares, index) {
    // console.log("hi");
    // board[index] = currentPlayer;
    // squares.textContent = currentPlayer;

    //     if (turn === playerX) {
    //         playerXMoves.push(squares[i]);
    //     }
    //     if (turn === playerO) {
    //         playerOMoves.push(squares[i]);
    //     }
     }


// // winning function
// function winGame (array) {
//     if (playerXMoves.filter( == )winningCombos[0] ||) {
//         console.log('Game is in progress') 
//     } else if (winner === "T") {
//         console.log("It's a tie") 
//     } else {
//         console.log('Winner!'); 
//     }
// };

// function winGame (array) {
//     if (playerX == winningCombos[0] ||) {
//         console.log('Game is in progress') 
//     } else if (winner === "T") {
//         console.log("It's a tie") 
//     } else {
//         console.log('Winner!'); 
//     }
// };

function winnerStatus () {
    for (let i = 0; i < winningCombos.length; i++){
        
    }

    if (winner !== null) {
        console.log('Game is in progress') 
    } else if (winner === "T") {
        console.log("It's a tie") 
    } else {
        console.log('Winner!'); 
    }
};

    // if (playerX.includes(index => {

    // })
        
    //     winningCombos[0] ||) {
    //     console.log('Game is in progress') 
    // } else if (winner === "T") {
    //     console.log("It's a tie") 
    // } else {
    //     console.log('Winner!'); 
    // }

// function tie () {};

function resetGame() {
    currentPlayer = true;
    // inplay = true;
    board =['', '', '', '', '', '', '', '', ''];
    squares.forEach(square => {square.innerText = ''});
    winner = false;
    startGame();
};












// TRIED FOLLOWING THE PROVIDED PSEUDOCODE;

/*----- constants -----*/
// 1.1 null is when the square is empty
// colors value represents the color to display for each key
//  const colors = {
//     'null' : "grey",
//     'playerX' : 'yellow',
//     'playerO' : 'purple',
//  }

// const playerX = 'X';
// const playerO= 'O';

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

// const winningCombos = [
// Horizontal 
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9],
// Vertical
//    [1, 4, 7],
//    [2, 5, 8],
//    [3, 6, 9],
// Diagonal
//    [1, 5, 9],
//    [3, 5, 7]
// ];
  
/*----- app's state (variables) -----*/
// 2.1  board array represents the squares
// let boardArray = [];

// 2.2 turn  variables: to remember whose turn it is
// let turn;

//????? 2.3 winner variable: represent three different possibilities - player that won, a tie, or game in play
// let winner = {
//    'won' : 'W',
//    'tie' : 'T',
//    'gameInPlay' : null,
// };

/*----- cached element references -----*/
// 3.1 storing 9 squares elements to squares variable (selecting all)
// let squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// squares = document.querySelectorAll('squares');
// console.log(squares);





/*----- event listeners -----*/


/*----- functions -----*/
// 4.1 initializing state variable
// 4.1.1 setting board squares to null, initializing turn, & winner is null
// function startGame () {
//    playGame();
//    boardArray = [null, null, null, null, null, null, null, null, null];
   // squares = boardArray;
// 4.1.2 Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1.
   // turnMove ();
//    turn = playerX;

// 4.1.3 Initialize winner to null to represent that there is no winner or tie yet.
//     winning ();
// };
//    winner = null;
// }

// function playGame () {

// };

// a turn function
// function turnMove () {
   // const Player1 = 1;
   // const PlayerO2= -1;
//   if (turn === playerX) {
//    turn = playerO;
//   } else {
//    turn = playerX;
//   }
// };





// winning function
// function winning () {
//    if (winner !== null) {
//        console.log('Game is in progress') 
//    } else if (winner === "T") {
//        console.log("It's a tie") 
//    } else {
//        console.log('Winner!'); 
//    }
// };

// function tie () {};

// 4.2 Render those state variables to the page:
// 4.2.1 render the board (board function)
// function gameBoard () {
//    for (let i = 0; i < squares.length; i++ ) {
   
       
//         squares[i] = boardArray;
//     }
//     if (playerX
//         boardArray
// }

// squares.forEach((i) => {
//     squares[i] = 

// } )
// }

// function resetGame() {};
