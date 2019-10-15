import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectCard from '../src/ProjectCard.js'
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AboutMe from '../src/AboutMe'

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
    top: 750,
    behavior: 'smooth'
    })
  }
  return (
    <div>
      <div class="area" >
          <ul class="circles">
            <div class="name">
              <h1 class='font-a'>
                Robert O'Gara
              </h1>
            </div>
            <i onClick={scrollFunction} class="icon-position chevron circle down big icon "></i>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
          </ul>
        </div>
      <div>
        <ProjectCard contester={"https://github.com/rgo594/Contester"}/>
        <AboutMe />
      </div>
    </div>
  );
}

// <div className="App">
//   <header>
//   </header>
//   <div class="top-page">
//     <div class="name">
//       <h1 class='font-a'>
//         Robert O'Gara
//       </h1>
//       <i onClick={scrollFunction} class="chevron circle down big icon "></i>
//
//     </div>
//   </div>
//   <div>
//
//   </div>
//   <div>
//     <ProjectCard contester={"https://github.com/rgo594/Contester"}/>
//     <AboutMe />
//   </div>
// </div>

export default App;
