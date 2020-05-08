import React from 'react';
import './App.css';
import Board from './Components/Board';

function App() {

  function refreshPage() {
    window.location.reload(false);
  };

  return (
    <div className="container">
      {/* <h1> Tic Tac Toe</h1> */}
      <div className="App"> 
      <Board/>
      <button className= "refresh" onClick = {()=>refreshPage()}>
        
        </button>
      </div>
    </div>
  );
}

export default App;


