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
        <a>
          <Icon name='user' />
        </a>
      </Card.Content>
    </Card>
  }

  render() {
    return (
      <div>
        <div>
        {this.gitCard(
          "https://github.com/rgo594/Contester",
          'https://static.turbosquid.com/Preview/2018/10/27__17_42_14/ABCWoodenBlocksvray3dmodel001.jpg0E8DF8BE-CD17-40B0-ACE0-C573EDAC4F0FDefault.jpg',
          'Contester',
          'A study app which quizzes you on standardized test subjects of your choice. Used ruby on rails backend, react frontend, semantic ui and custom CSS for styling.')}
        </div>
        <div>{this.gitCard(
          "https://github.com/rgo594/Friend-Finder",
          'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/making-friends-in-college-lg.png',
          'Friend Finder',
          'Social media app to aid new people in New York City to find and meet friends. Ruby on rails front and backend with custom CSS and bootstrap for styling.')}
        </div>
        <div>{this.gitCard(
          "https://github.com/rgo594/Movie-Reviewer",
          'https://pixel.nymag.com/imgs/fashion/daily/2018/11/02/2-empty-movie-theatre.w700.h700.jpg',
          'Movie Reviewer',
          'Website designed for users to create movie reviews. Users can leave a score from 1 to 10 and then that score will be factored into the average score displayed at the top of each movie page. ruby on rails backend, react front end, bootstrap and custom CSS for styling.'
        )}
        </div>
        <div>{this.gitCard("https://github.com/rgo594/Hoptimization",
          'https://timedotcom.files.wordpress.com/2018/04/national-beer-day-ipa.jpg?w=800&quality=85',
          'Hoptimization',
          'Beer reviewer app which allows a user to find their favorite beer and a brief description regarding it. Ruby front and backend.')}
        </div>
      </div>
    );
  }

}

export default ProjectCard;
