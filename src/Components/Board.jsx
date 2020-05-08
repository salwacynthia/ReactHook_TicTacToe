import React, {useState} from 'react';

// import Square from './Square';


function Square (props){
    return(
        <button className = "button" onClick = {props.onClick}>
            {props.value}
        </button>
    );
}

function Board(){
    //state 
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = index =>{
        const squares = [...boardSquares]; 

        if( whoIsTheWinner(boardSquares) || squares[index]) return; // if this already has a value return
       
        //add X or O
        squares[index] = xIsNext ? "X" : "O";
        //calculate next turn
        //set the state of the board
        setBoardSquares(squares);
        //set the state of the turn
        setXIsNext(!xIsNext);
          
    
    };

    //create a render square function
    //takes an index and return a square with correct value and function
    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={()=>handleClick(index)}/>
    };
    //create the board
    //calculates winner
    let status ;
    const winner = whoIsTheWinner(boardSquares);
    
    status = winner ? 
    `Winner is: ${winner}` :
    `Next player: ${xIsNext ? "X" : "O"}`; 
    
    
    function whoIsTheWinner(squares){
            const winningLine = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [3, 4, 5],
                [6, 7, 8],
                [0, 4, 8]
               ];
               console.log(winningLine)
               for (let i=0; i < winningLine.length; i++){
                   const [a,b,c]=winningLine[i];
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
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div> 
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div> 
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>  
                
        </div>
    );
}

export default Board;