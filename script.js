console.log('Welcome to Tic Tac Toe');
let music = new Audio ("game-playing.wav");
let click = new Audio ( "click.wav");
let GameOver = new Audio ( "game-over.wav");
let turn = 'X';
let isgameover = false;

//Function to change the turn

const changeTurn = () => {
    return turn === "X"? "O" : "X"

}

//Function to check for the win

const CheckWin = () => {
    let boxText =document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e =>{
        if( ( boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
            //GameOver.play();  
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "300px";

        }
    })

}

//Game logic
//music.play();
let Boxes= document.getElementsByClassName ("box");
Array.from(Boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener( 'click', () =>{
        if(boxText.innerText === '' ){
            boxText.innerText = turn;
            turn = changeTurn();
            click.play();
            CheckWin();
            if (!isgameover){
                document.getElementsByClassName ('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
}) 

//Add onclick listner to reset button
reset.addEventListener('click', () =>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element =>{
        element.innerText = '';
    });
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName ('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px ";


});