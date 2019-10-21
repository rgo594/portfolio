import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'

const mybutton = document.getElementById("myBtn");

const cardClickHandler = (url) => {
  return window.location.replace(url);
}

class ProjectCard extends Component {

  gitCard = (gitLink, imgAdd, title, description) => {
    return <Card onClick={() => cardClickHandler(gitLink)}>
      <Image src={imgAdd} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  }

  render() {
    return (
      <div>
        <center><h1 class="projects">Projects</h1></center>
        <br></br>
        <div class="ui four column grid">
          <div class='row'>
            <div class="column">
            {this.gitCard(
              "https://github.com/rgo594/Contester",
              'https://static.turbosquid.com/Preview/2018/10/27__17_42_14/ABCWoodenBlocksvray3dmodel001.jpg0E8DF8BE-CD17-40B0-ACE0-C573EDAC4F0FDefault.jpg',
              'Contester',
              'A study app which quizzes you on standardized test subjects of your choice. Used ruby on rails backend, react frontend, semantic ui and custom CSS for styling.')}
            </div>
            <div class="column">
            {this.gitCard(
              "https://github.com/rgo594/Friend-Finder",
              'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/making-friends-in-college-lg.png',
              'Friend Finder',
              'Social media app to aid new people in New York City to find and meet friends. Ruby on rails front and backend with custom CSS and bootstrap for styling.')}
            </div>
            <div class="column">
            {this.gitCard(
              "https://github.com/rgo594/Movie-Reviewer",
              'https://media.timeout.com/images/101600111/630/472/image.jpg',
              'Movie Reviewer',
              'Website designed for users to create movie reviews. Users can leave a score from 1 to 10. ruby on rails backend, react front end, bootstrap and CSS for styling.'
            )}
            </div>
            <div class="column">{
              this.gitCard(
              "https://github.com/rgo594/Hoptimization",
              'https://timedotcom.files.wordpress.com/2018/04/national-beer-day-ipa.jpg?w=800&quality=85',
              'Hoptimization',
              'Beer reviewer app which allows a user to find their favorite beer and a brief description regarding it. Ruby front and backend.')}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectCard;
