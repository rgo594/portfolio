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

  // const CardExampleCard = () => (
  //   <Card onClick={() => cardClickHandler("https://github.com/rgo594/Contester")}>
  //     <Image src='https://static.turbosquid.com/Preview/2018/10/27__17_42_14/ABCWoodenBlocksvray3dmodel001.jpg0E8DF8BE-CD17-40B0-ACE0-C573EDAC4F0FDefault.jpg' wrapped ui={false} />
  //     <Card.Content>
  //       <Card.Header>Contester</Card.Header>
  //       <Card.Meta>
  //         <span className='date'></span>
  //       </Card.Meta>
  //       <Card.Description>
  //         A study app which quizzes you on standardized test subjects of your choice. Used ruby on rails backend, react frontend, semantic ui and custom CSS for styling.
  //       </Card.Description>
  //     </Card.Content>
  //     <Card.Content extra>
  //       <a>
  //         <Icon name='user' />
  //       </a>
  //     </Card.Content>
  //   </Card>
  // )

  const scrollFunction = () => {
    window.scroll({
    top: 500,
    left: 500,
    behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <header>
      </header>
      <div style={{height:"800px"}}>
        <div class="name">
          <h1>
            Robert O'Gara
          </h1>
          <button class="button" onClick={scrollFunction} id="myBtn" title="Projects">&nbsp;<Icon onClick={scrollFunction} name='angle down' /></button>
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
