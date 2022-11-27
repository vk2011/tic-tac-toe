console.log('Welcome to Tic Tac Toe');
let music = new Audio ("game-playing.wav");
let click = new Audio ( "click.wav");
let GAmeOver = new Audio ( "game-over.wav");
let turn = 'X';
let isgameover = false;


let Boxes= document.getElementsByClassName ("Box");
Array.from(Boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener( 'click', () =>{
        if(boxText.innerText === '' ){
            boxText.innerText == turn;
            turn = changeTurn();
            click.play();
            CheckWin();