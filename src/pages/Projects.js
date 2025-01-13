import React from 'react';
import '../Styling/projects.css';
import weather from '../images/weather.jpg'
import snake from '../images/snakeBackground.png'
import assistant from '../images/assistant.png'
import chat from '../images/chat.png'
import rogue from '../images/rogue.png'
import gpx from '../images/gpx.png'

const projects = [
  {
    name: 'Weather App',
    techStack: 'Angular, Typescript, HTML, SCSS, Bootstrap',
    date: 'December 2024',
    description: 'Built a web application that gets weather data from an api, and displays it for the user based on location and forecast.',
    img: weather,
    githubLink: 'https://github.com/meghbhvsr/WeatherApp'
  },
  {
    name: 'Virtual Assistant',
    techStack: 'Python, Javascript, MySQL, HTML, Flask, OpenAI',
    date: 'June 2024',
    description: 'Created a Virtual Assistant that you can ask anything, have it set reminders, act as a calendar and send emails.',
    img: assistant,
    githubLink: 'https://github.com/meghbhvsr/VirtualAssistant'
  },
  {
    name: 'Arcade Games',
    techStack: 'HTML, Javascript, CSS, PHP, Shell',
    date: 'April 2024',
    description: 'Built a website where users can play various types of arcade games and get a high score and compete with others.',
    img: snake,
    githubLink: 'https://github.com/meghbhvsr/ArcadeGames'
  },
  {
    name: 'Web Chat Application',
    techStack: 'Javascript, HTML, CSS, Heroku, Node.Js, Socket.IO',
    date: 'June 2021',
    description: 'Created a web application that allows users to communicate with other users in various chat rooms.',
    img: chat,
    githubLink: 'https://github.com/meghbhvsr/webchatapp'
  },
  {
    name: 'Rogue',
    techStack: 'Java, Gradle, Swing',
    date: 'December 2020',
    description: 'Implemented a dungeon roaming, rogue‑like, role playing game, by leveraging OOP principles.',
    img: rogue,
    githubLink: 'https://github.com/meghbhvsr/RogueLike'
  },
  {
    name: 'GPX Website',
    techStack: 'C, HTML, Javascript, CSS, Node.js, Socket.io',
    date: 'April 2021',
    description: 'Built a gps website that allows you to create GPX files, and play around with them.',
    img: gpx,
    githubLink: 'https://github.com/meghbhvsr/GPXParser'
  }
];

const Projects = () => (
  <div className="projects-container">
    <div className='card-container'>
      {projects.slice(0, 3).map((proj, index) => (
          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" key={index} className="card-link">
              <div className="card" key={index} href={proj.githubLink}>
                  <h3>{proj.name}</h3>
                  <h4>{proj.techStack}</h4>
                  <p>{proj.date}</p>
                  <img src={proj.img} alt='pic' className='project-images'></img>
                  <p>{proj.description}</p>
              </div>
          </a>
      ))}
      <div className="middle-text">
        <p>Click on the cards if you want to see the code/github repository for these projects</p>
      </div>
      {projects.slice(3).map((proj, index) => (
          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" key={index + 3} className="card-link">
              <div className="card" key={index} href={proj.githubLink}>
                  <h3>{proj.name}</h3>
                  <h4>{proj.techStack}</h4>
                  <p>{proj.date}</p>
                  <img src={proj.img} alt='pic' className='project-images'></img>
                  <p>{proj.description}</p>
              </div>
          </a>
      ))}
    </div>
  </div>
);

export default Projects