import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'


const cinStyle = {
  fontFamily: 'Cinzel'
}

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Robert O'Gara
        </p>
        <Button>
          To homepage
        </Button>
      </header>
    </div>
  );
}

export default App;
