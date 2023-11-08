import React, { useState } from 'react';
import { Card, Button, Modal, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';


function formatAsCurrency(value) {
    // Convert the string value to a number
    const numberValue = Number(value.replace(/[^0-9.-]+/g,""));
    
    // Format the number as currency and return
    return numberValue.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 });
}





function QuoteModal({ show, handleClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [budget, setBudget] = useState('');
    const [rawBudget, setRawBudget] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [customServiceType, setCustomServiceType] = useState("");
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('Request Quote');

    function handleBudgetChange(e) {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9.-]+/g,"");
    
        if (/^\d*\.?\d*$/.test(numericValue) || numericValue === '') {
            const formattedValue = formatAsCurrency(numericValue);
            setBudget(formattedValue);
            setRawBudget(numericValue);
        }
    }

    const handleSubmit = async (e) => {
        setSubmitStatus(<LoadingSpinner />);
        e.preventDefault();

        const formData = {
            name: name || "Not Provided",
            email: email || "Not Provided",
            phone: phone || "Not Provided",
            company: company || "Not Provided",
            budget: budget || "Not Provided",
            rawBudget: rawBudget || "Not Provided", // may use this in the future
            serviceType: serviceType || "Not Provided",
            customServiceType: customServiceType || "Not Provided",
            message: message || "Not Provided",
        };

        try {
            const response = await axios.post('https://ajp.network/api/quoteForm.php', formData);
            console.log('Form submitted: ', response.data);
            setSubmitStatus('Message Sent!');
            setTimeout(() => setSubmitStatus('Request Quote'), 3000);
        } catch (error) {
            console.log('Error submitting form: ', error);
            setSubmitStatus('Error!');
        }

        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setBudget('');
        setServiceType('');
        setMessage('');
    };

    return (
        
        <Modal show={show} onHide={handleClose} className="quote-modal">
            <Modal.Header>
                <Modal.Title>Request a Free Quote</Modal.Title>
            </Modal.Header>
            <Form className='quoteForm' onSubmit={handleSubmit}>
                <Modal.Body>
                    <p style={{color: 'red', fontSize: '14px'}}>* Required</p>
                    <div className="quoteForm-wrapper">
                        <Form.Group controlId="formName" className='quoteFormGroup'>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name*' />
                        </Form.Group>
                        
                        <Form.Group controlId="formEmail" className='quoteFormGroup'>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email*' />
                        </Form.Group>
                        
                        <Form.Group controlId="formPhone" className='quoteFormGroup'>
                            <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' />
                        </Form.Group>
                       
                        <Form.Group controlId="formCompany" className='quoteFormGroup'>
                            <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} required placeholder='Company*' />
                        </Form.Group>
                        
                        <Form.Group controlId="formBudget" className='quoteFormGroup'>
                            <Form.Control type="text" value={budget}  onChange={handleBudgetChange} placeholder='Budget' />
                        </Form.Group>
                        
                        <Form.Group controlId="formServiceType" className='quoteFormGroup'>
                            <Form.Control as="select" value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                                <option value="">Select a Service Type*</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>


                        {serviceType === "other" && (
                            <Form.Group controlId="formCustomServiceType" className='quoteFormGroup'>
                                <Form.Control type="text" value={customServiceType} onChange={(e) => setCustomServiceType(e.target.value)} placeholder="Custom Service Type" required />
                            </Form.Group>
                        )}
                        
                        <Form.Group controlId="formMessage" className='quoteFormGroup'>
                            <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='Message*' />
                        </Form.Group>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">{submitStatus || 'Submit'}</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

function LoadingSpinner() {
    return (
        <Spinner animation="border" role="status" className='contact-spinner'>
            <span className="sr-only"></span>
        </Spinner>
    );
}

function Services() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
      <div className="container py-5">
      <Card className='block-section'>
          <Card.Body className='block-section-body'>
              <Card.Title className="block-section-title">Services We Offer</Card.Title>
              <div className="block-section-content">                  <p>
                      <strong>Web Applications</strong><br/>
                      Tailored to fit the dynamic needs of the digital age, we specialize in crafting high-quality Web Applications that are not only intuitive and user-friendly but also robust and scalable. Let us transform your vision into a digital masterpiece.
                  </p>
                  <br/>
                  <p>
                      <strong>Mobile App Development</strong><br/>
                      In a world that's increasingly mobile, you need solutions that move with your users. At AJP Networks, we leverage cutting-edge technologies and design methodologies to build Mobile Apps that resonate with users and keep them engaged, whether it's on iOS or Android.
                  </p>
                  <br/>
                  <p>
                      <strong>Why Choose AJP Networks?</strong><br/>
                      Our commitment is to deliver unparalleled digital solutions that not only meet but exceed expectations. Partner with AJP Networks and empower your business to soar to new heights in the digital realm.
                  </p>
                  <Button variant="primary" type="submit" onClick={handleShow}>{'Request A Quote'}</Button>
            </div>
          </Card.Body>
      </Card>
      <QuoteModal show={show} handleClose={handleClose}/>
  </div>
    );
}

export default Services;
