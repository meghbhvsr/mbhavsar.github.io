import React from 'react';
import '../Styling/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Megh Bhavsar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;