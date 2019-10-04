import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectCard from '../src/ProjectCard.js'
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'


const cinStyle = {
  fontFamily: 'Cinzel'
}


function App() {

  const mybutton = document.getElementById("myBtn");

  const cardClickHandler = (url) => {
    return window.location.replace(url);
  }

  const scrollFunction = () => {
    window.scroll({
    top: 900,
    behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <header>
      </header>
      <div class="top-page">
        <div class="name">
          <h1 class='font-a'>
            Robert O'Gara
          </h1>
          <i onClick={scrollFunction} class="chevron circle down big icon "></i>
        </div>
      </div>
      <div>

      </div>
      <div>
        <ProjectCard contester={"https://github.com/rgo594/Contester"}/>
      </div>
    </div>
  );
}

export default App;
