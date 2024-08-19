import React from 'react';
import '../Styling/projects.css';

const projects = [
  {
    name: 'Virtual Assistant',
    techStack: 'Python, Javascript, MySQL, HTML, Flask, OpenAI',
    date: 'June 2024',
    description: 'Created a Virtual Assistant that you can ask anything, have it set reminders, act as a calendar and send emails.',
    githubLink: 'https://github.com/meghbhvsr/VirtualAssistant'
  },
  {
    name: 'Web Chat Application',
    techStack: 'Javascript, HTML, CSS, Heroku, Node.Js, Socket.IO',
    date: 'June 2021',
    description: 'Created a web application that allows users to communicate with other users in various chat rooms.',
    githubLink: 'https://github.com/meghbhvsr/webchatapp'
  },
  {
    name: 'Rogue',
    techStack: 'Java, Gradle, Swing',
    date: 'December 2020',
    description: 'Implemented a dungeon roaming, rogue‑like, role playing game, by leveraging OOP principles.',
    githubLink: 'https://github.com/meghbhvsr/RogueLike'
  },
  {
    name: 'GPX Website',
    techStack: 'C, HTML, Javascript, CSS, Node.js, Socket.io',
    date: 'April 2021',
    description: 'Built a gps website that allows you to create GPX files, and play around with them.',
    githubLink: 'https://github.com/meghbhvsr/GPXParser'
  },
  {
    name: 'Arcade Games',
    techStack: 'C, HTML, Javascript, CSS, Node.js, Socket.io',
    date: 'April 2021',
    description: 'Built a gps website that allows you to create GPX files, and play around with them.',
    githubLink: 'https://github.com/meghbhvsr/GPXParser'
  }
  // Add more experiences as needed
];

const Projects = () => (
  <div className="projects-container">
    <div className='card-container'>
      {projects.map((proj, index) => (
          <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" key={index} className="card-link">
              <div className="card" key={index} href={proj.githubLink}>
                  <h3>{proj.name}</h3>
                  <h4>{proj.techStack}</h4>
                  <p>{proj.date}</p>
                  <p>{proj.description}</p>
              </div>
          </a>
      ))}
    </div>
  </div>
);

export default Projects