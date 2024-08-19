import React from 'react';
import '../Styling/about.css';
import grad from '../images/megh_grad_photo.jpg'
import onepiece from '../images/one-piece-img.jpg'

const About = () => (
    <div className="about-page">
        <h2>Who is Megh Bhavsar?</h2>
        <br></br>
        <div className='about'>
            <p>I am a recent graduate from the University of Guelph with a bachelors in computing with honours and distinction. I have a major in Software Engineering and a minor in Statistics.
                I have about 2 years of Software Development experience throughout the 5 coops terms I have completed. At these positions I have created various Full Stack applications,
                while leveraging various AI and ML libraries. I strive to become a better problem solver and programmer by solving leetcode problems and creating my own personal side projects.
                I am looking for a full time Software Engineering, Full Stack Development or Software Development position. Some of my hobbies include watching anime, my favourite of which is one piece,
                along with code geass and naruto. I also enjoy watching and playing basketball, my favorite team is the Toronto Raptors.
            </p>
            <img src={grad} alt='grad' className='grad-img'></img>
        </div>
        <img src={onepiece} alt='personal' className='one-piece-img'></img>
    </div>
);

export default About;