import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/header.css';
const Header = () => (
  <header>
    <p className="name">Megh Bhavsar</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  </header>
);

export default Header;