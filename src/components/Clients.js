import React from 'react';
import { Card } from 'react-bootstrap';
import cviLogo from '../logos/coopervision.png';
import esgLogo from '../logos/elevatesolutionsgroup.png';

function Clients() {
  return (
    <div className="container py-5">
      <Card className='block-section'>
        <Card.Body className='block-section-body'>
          <Card.Title className="block-section-title">Clients and Past Projects</Card.Title>
          <div className="block-section-content">

            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Integrated Kit Builder</Card.Header>
              <Card.Body>
                <Card.Title>Elevate Solutions Group | CooperVision</Card.Title>
                <Card.Text>
                  We have engineered and implemented an advanced scanning software solution for ESG's production team. This system automates data import and facilitates the precise scanning of trial lenses into assorted trays, and subsequently, trays into kits. Upon successful verification against multiple data metrics, a Kit Build Data file is automatically generated and transmitted to CooperVision, fulfilling their specific data requirements. Additionally, a corresponding file is sent back to ESG to meet their inventory management needs.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <a href='https://esgworks.com'><img src={esgLogo} alt="Elevate Solutions Group Logo" className='esgLogo' /></a>
                <a href='https://coopervision.com'><img src={cviLogo} alt="CooperVision Logo" className='cviLogo' /></a>
              </Card.Footer>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Clients; 
