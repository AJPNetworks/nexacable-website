import React, { useState } from 'react';
import icon from '../icon.svg';
import { Modal, Button, Container } from 'react-bootstrap';


function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <div className="icon">
          <img src={icon} style={{ height: '100px' }} alt="Icon" />
        </div>
        <div className="links">
          <ul className="list-unstyled">
            <li>&nbsp;</li>
            <li><a href='mailto:contact@nexacable.net'>contact@nexacable.net</a></li>
            <li><a href='tel:17064775170'>+1 (706) 477-5170</a></li>
          </ul>
        </div>
      </Container>
      <div className="identity">
        <p>Copyright &copy; 2023 NexaCable Technologies LLC | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
