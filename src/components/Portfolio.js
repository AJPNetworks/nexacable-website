import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  return (
    <div className="container py-5">
      <Card className='block-section'>
        <Card.Body className='block-section-body'>
          <Card.Title className="block-section-title">Company Development Portfolio</Card.Title>
          <div className="block-section-content">
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Website</Card.Header>
              <Card.Body>
                <Card.Title>AJP Networks Website</Card.Title>
                <Card.Text>
                  Matter fact, the website you're looking at right now was built with ReactJS and the React Bootstrap framework.
                  You can also check out the source code to this site on our Github as well.
                </Card.Text>
              </Card.Body>
              {/*<p className='flex-card-status-text'>Last updated 2 days ago</p>*/}
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/AJP-Networks-Website' target='_blank'>Check it out</Button></Card.Footer>
            </Card>
          
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Website</Card.Header>
              <Card.Body>
                <Card.Title>AJP Networks Sharing</Card.Title>
                <Card.Text>
                  This is a simple file uploading and sharing application that generates easily sharable links.
                  We've spent many hours on this project and we plan to rewrite the entire frontend in the near future.
                </Card.Text>
              </Card.Body>
              {/*<p className='flex-card-status-text'>Last updated 2 days ago</p>*/}
              <Card.Footer className="text-muted"><Button variant="primary" href='https://share.ajp.network/' target='_blank'>Check it out</Button></Card.Footer>
            </Card>

            <Card bg='dark' className="flex-card text-white">
              <Card.Header>GitHub</Card.Header>
              <Card.Body>
                <Card.Title>DashLinx</Card.Title>
                <Card.Text>
                  This was a project we made that acts as a network-wide dashboard, inspired by another open-source project, Heimdall.
                  DashLinx is a great software that can hold many customizable shortcuts and folders (beta) that can link to anything.
                </Card.Text>
              </Card.Body>
              {/*<p className='flex-card-status-text'>Last updated 2 days ago</p>*/}
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/DashLinx' target='_blank'>Check it out</Button></Card.Footer>
            </Card>

            <Card bg='dark' className="flex-card text-white">
              <Card.Header>GitHub</Card.Header>
              <Card.Body>
                <Card.Title>Prox-Kiox</Card.Title>
                <Card.Text>
                  Prox-Kiox is a simple install script we created and have received great feedback on from a community full of passionate individuals over at HSVE.
                  This script allows anyone with a Proxmox hypervisor to be able to easily manage the entire system from the machine itself.
                </Card.Text>
              </Card.Body>
              {/*<p className='flex-card-status-text'>Last updated 2 days ago</p>*/}
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/Prox-Kiox' target='_blank'>Check it out</Button></Card.Footer>
            </Card>

          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Portfolio;
