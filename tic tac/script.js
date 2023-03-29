const cell=document.querySelectorAll(".game-board .cell");
const play1=document.querySelector(".play1");
const play2=document.querySelector(".play2");
const result= document.querySelector(".result");
const result_text= document.querySelector(".result h1");
const result_button= document.querySelector(".result button");
const win_statement=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const playerO="O";
const playerX="X";
let toggleTurn=true;
cell.forEach(cells => {
    cells.onclick=()=>{
        let currentPlayer= toggleTurn ? playerO : playerX;
        // console.log(cells.innerText);
        cells.classList.add("disabled");
        // cells.innerHTML = currentPlayer;
        // toggleTurn=!toggleTurn;
        addIn(cells,currentPlayer);
        if(winnercheck(currentPlayer)){
            // console.log(currentPlayer+' winner');
            result.classList.remove("inactive");
            result_text.innerText = currentPlayer + " winner";
        }
        else if(Draw()){
            // console.log('Draw');
            result.classList.remove("inactive");
            result_text.innerText ="Draw!";
        }
        else{
            swap();
        }
        
    }
});
function winnercheck(currentPlayer){
return win_statement.some(condition=>{
    return condition.every(index=>{
        return cell[index].classList.contains(currentPlayer);
    });
})
}

function Draw(){
    return [...cell].every(cells=>{
        return cells.classList.contains(playerX) || cells.classList.contains(playerO); 
    })
}

function swap(){
    toggleTurn=!toggleTurn;
    if(toggleTurn){
        play1.classList.add("active");
        play2.classList.remove("active");
    }
    else{
        play2.classList.add("active");
        play1.classList.remove("active");
    }
}
function addIn(cells,currentPlayer){
    cells.innerHTML = currentPlayer;
    cells.classList.add(currentPlayer);

}
result_button.onclick=()=>{
    location.reload();
}