import React from 'react';
import '../Styling/experience.css';
import wsib from '../images/wsib_innovation_lab_logo.jpeg'
import brock from '../images/brock_image.png'
import guelph from '../images/guelph_img.png'
import stem from '../images/stem_world_image.png'

const experiences = [
  {
    company: 'Workplace Safety Insurance Board',
    role: 'Full-Stack Developer',
    duration: 'Jan 2023 - August 2023',
    description: [
        '- Developed a full‑stack application that helps users automate coding by leveraging Open AI’s gpt3.0 library.',
        '- Implemented an application that detects threats in the workplace and how to avoid them by utilizing open sourced Gen AI libraries such asEDICT and YOLOv8 object detection model, that reduced injury counts by 30 percent.',
        '- Developed and implemented a cutting‑edge React web application that effectively stores and presents comprehensive client information for WSIB, resulting in a 40 percent reduction in data retrieval time.'
    ],
    imgSrc: wsib
  },
  {
    company: 'Brock Solutions',
    role: 'Full-Stack Developer',
    duration: 'May 2022 - Aug 2022',
    description: [
      '- Worked across the entire stack by using Vaadin and Java to develop web applications for company clients like Charter Dura‑Bar.',
      '- Adopted technologies like Docker Desktop and SSMS (SQL) to make the application more efficient, increasing usage by 30 percent.',
      '- Directed andmanaged scrummeetings to track app development progress, align team efforts, and exceed client expectations; optimized project workflow and achieved 95 percent on‑time delivery rate.'
    ],
    imgSrc: brock
  },
  {
    company: 'Brock Solutions',
    role: 'Software Developer',
    duration: 'Sep 2021 - Dec 2021',
    description: [
      '- Developed an IoT application by providing the customer an integration layer between their business and real‑time operations.',
      '- Integrated FactoryTalk Historian and Thingworx using a PI Web API, providing real‑time visualization of their plant operations to end users and increasing plant productivity by saving 100 man hours per week.',
      '- Created a REST API to update production quantities and usage‑based statistics using an external plant metrics application called sprocket.',
    ],
    imgSrc: brock
  },
  {
    company: 'University of Guelph',
    role: 'Recruitment and Data Analytics Assistant',
    duration: 'Jul 2021 - Aug 2021',
    description: [
      '- Created detailed reports using Google Analytics and Google Data Studio to understand the users and their activity.',
      '- Conducted studies over surveys to determine trends that resulted in a 20 percent increase in site activity.'
    ],
    imgSrc: guelph
  },
  {
    company: 'StemWorld Educational Services',
    duration: 'May 2021 - May 2021',
    description: [
      '- Created a neural network using Python, Tensorflow and Keras that recognizes hand drawn letters.',
      '- Worked with the game development team to help with coordination of the project.',
    ],
    imgSrc: stem
  }
  // Add more experiences as needed
];

const Experience = () => (
  <div className="experience-container">
    {experiences.map((exp, index) => (
      <div className="card" key={index}>
        <h3>{exp.company}</h3>
        <h4>{exp.role}</h4>
        <p>{exp.duration}</p>
        {exp.description.map((desc, i) => (
          <p key={i} className="description-item">{desc}</p>
        ))}
        <img src={exp.imgSrc} alt='pic' className='work-images'></img>
      </div>
    ))}
  </div>
);

export default Experience;