
import React, {useState} from 'react';

function Square (props){
    return(
        <button className = "button" onClick = {props.onClick}>
            {props.value}
        </button>
    );
}

function Board(){
    //state 
    const [boardSquare, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = index =>{
        const squares = [...boardSquare]; 

        if( whoIsTheWinner(boardSquare) || squares[index]) return; // if this already has a value return
       
        //add X or O
        squares[index] = xIsNext ? "X" : "O";
        //calculate next turn
        //set the state of the board
        setBoard(squares);
        //set the state of the turn
        setXIsNext(!xIsNext);
          
    
    };

    //create a render square function
    //takes an index and return a square with correct value and function
    const renderSquare = (index) => {
        return <Square value={boardSquare[index]} onClick={()=>handleClick(index)}/>
    };
    //create the board
    //calculates winner
    let status ;
    const winner = whoIsTheWinner(boardSquare);
    
    status = winner ? 
    `Winner is: ${winner}` :
    `Next player: ${xIsNext ? "X" : "O"}`; 
    
    
    function whoIsTheWinner(squares){
            const winningCondition = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [3, 4, 5],
                [6, 7, 8],
                [0, 4, 8]
               ];
               console.log(winningCondition)
               for (let i=0; i < winningCondition.length; i++){
                   const [a,b,c]=winningCondition[i];
                   if (squares[a] && squares[a] === squares[b] && squares[b]===squares[c])
                   return squares[a]; 
               } 
               
            return null;
            };
        
            
    return(
        <div>
            <div>
                {/* who's turn is it? */}
                {status}
            </div>
            {/* this div below is one row */}
            <div className="button">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div> 
            <div className="button">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div> 
            <div className="button">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>  
                
        </div>
    );
}

export default Board;