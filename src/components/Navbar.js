import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../icon.svg';

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (targetId, offset = 50) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
    setExpanded(false);  // Collapse navbar after scrolling
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#0A4C8A' }} variant="dark" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Navbar.Brand href="/">
          <img src={icon} className="Nav-Icon" alt="Logo"/>
          NexaCable Technologies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='Nav-Compensation'></div>
    </div>
  );

  
  doNotreturn (
    <div>
      <Navbar style={{ backgroundColor: '#0A4C8A' }} variant="dark" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Navbar.Brand href="/">
          <img src={icon} className="Nav-Icon" alt="Logo"/>
          NexaCable Technologies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleScroll('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleScroll('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='Nav-Compensation'></div>
    </div>
  );
  function doNotreturn() {

  }
}

export default AppNavbar;
