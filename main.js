let arrInputTic = [];
let arrInputTac = [];
let turn =  true; //true -  tic , false - tac
const arrWinningCombos =[
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [3,6,9],
    [4,5,6],
    [7,8,9]
];

const process = (thisRef) => {
    index =  thisRef.id;
    takeInput(index);
    arrInput = arrInputTac.concat(arrInputTic);
    if(arrInput.length < 5){
        swapTurn();
        return;
    }
    if(hasWon())
        declareWinner();
    else if(isDraw(arrInput))
        declareDraw();
    else
        swapTurn();
}
const isTurn = () => {return turn === true;}
const swapTurn= () => { turn =  !turn} 
const isDraw = (arrInput) => { return arrInput.length == 9}
const declareDraw = () =>{ alert("Draw")}
const declareWinner = () =>{ alert("Game End")}
const takeInput = (index) => {
    index=  parseInt(index);
    document.getElementById(index).innerHTML = isTurn() ? 1 : 0;
    if(isTurn())
        arrInputTic.push(index);
    else    
        arrInputTac.push(index);
}
const hasWon = () => {
    return arrWinningCombos.some((combo)=> {
        return combo.every((index)=>{
            if(isTurn())
                return arrInputTic.find(x=> x == index)
            else    
                return arrInputTac.find(x=> x == index)
        })
    })
}
