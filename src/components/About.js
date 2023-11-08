import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
  <div className="container py-5">
    <Card className='block-section'>
      <Card.Body className='block-section-body'>
        <div className="block-section-content">
          <div>
            <h2>Wow!  Looks like you're here early!</h2>
            <br/>
            <h3>We are a start up IT company that specializes in commercial cabling and systems installation.</h3>
            <br/>
            <h6>Some of our services are still under development, as you can seee here.  Feel free to check out our <a href="https://www.yelp.com/biz/nexacable-technologies-smyrna-2">Yelp</a> page in the mean time for more details, or to contact us directly, you can call us at <a href="tel:17064775170">(706) 477-5170</a> or <a href="mailto:contact@nexacable.net">contact@nexacable.net</a></h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
  );
}

export default About;



