import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'


const cinStyle = {
  fontFamily: 'Cinzel'
}


function App() {

  const mybutton = document.getElementById("myBtn");

  const scrollFunction = () => {
    window.scroll({
    top: 100,
    left: 100,
    behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <header style={{height:"1000vh"}}>
        <p>
          Robert O'Gara
        </p>
        <Button>

        </Button>
      </header>
      <button onClick={scrollFunction} id="myBtn" title="Go to top">Top</button>
    </div>
  );
}

export default App;
