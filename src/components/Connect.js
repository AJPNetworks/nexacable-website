import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className='social-icons-wrapper'>
      <a href="https://www.instagram.com/ajpnetworks" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='social-icon'/>
      </a>
      <a href="https://www.linkedin.com/in/alexander-phillipson-26699921a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='social-icon'/>
      </a>
    </div>
  );
}

function Connect() {
  return (
    <div className="container py-5">
      <Card className='block-section'>
        <Card.Body className='block-section-body'>
          <Card.Title className="block-section-title">Find Ways to Connect</Card.Title>
          <SocialLinks />
          <div className="block-section-content">
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Discord</Card.Header>
              <Card.Body>
                <Card.Title>Makers of Open Source Software (MOSS)</Card.Title>
                <Card.Text>
                  We have created this discord as a place for software developers to come together, collaborate on their ideas, and showcase their projects. Our community is small at the moment and is moderately inactive, but it is always open to new members, and we would love to see you there.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://discord.gg/3duy8ft7fm' target='_blank'>Join</Button></Card.Footer>
            </Card>

            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Discord</Card.Header>
              <Card.Body>
                <Card.Title>Harvey's Virtual Environment</Card.Title>
                <Card.Text>
                  Harvey's Virtual Environment (HSVE) is a community-driven group dedicated to finding new ways to create 'Hackintoshes'. We have found that using a virtual machine in Proxmox allows for great management and backup systems. HSVE is not only focused on projects with Proxmox but also offers an amazing place for community support on any topic.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://discord.gg/WGUdajWzxz' target='_blank'>Join</Button></Card.Footer>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Connect;
