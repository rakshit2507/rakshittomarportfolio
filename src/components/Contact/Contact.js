import React from 'react';
import { Container,Row,Col,Form,Button,Toast } from 'react-bootstrap';
import Particle from '../Particle';
import laptopImg from "../../Assets/about.png";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { id } from 'date-fns/locale';

const emailJson = () =>  { return {from_name : '',contact_number : "", from_email :'', message :''}}
function Contact (){
    const [emailJsonToSend, setEmailJsonToSend] = useState({...emailJson(),to_name:'Rakshit Tomar'})
    const [showToast, setShowToast] = useState(false);

    const emailSend = (e) =>{
        e.preventDefault()
        console.log("emailJsonToSend",emailJsonToSend)
            emailjs.send('service_ouzllqh', 'template_3rsn16t', emailJsonToSend, 's3X-Mr7QXyHKy3T9W')
            .then((response) => {
              console.log('Email sent successfully:', response.status);
              if(response.status == 200){
                  handleAPICall()
                  setEmailJsonToSend({...emailJson(),to_name:'Rakshit Tomar'})
              }
            }, (error) => {
              console.error('Email sending failed:', error);
            });
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
    
        setEmailJsonToSend(prev => ({
            ...prev,
            [id]: value
        }));
    };

  const handleAPICall = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };


    return(
        <Container fluid className="contact-section">
            {/* ------ Particle ------- */}
            <Particle />

            {/* -------- Success Toaster ------- */}
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className='sucessToaster'>
        <Toast.Body>
            <div className='d-flex justify-content-around'>
          <strong className="me-auto">Message sent successfully</strong>
          <strong className=''>X</strong>
            </div>
        </Toast.Body>
      </Toast>

      {/* -------- Contact Form ------------ */}

      <Row className='d-flex justify-content-center align-items-center'>
        <Col xs={12} sm={6} md={4} lg={4} className='mx-5 contactFormStyle'>
          <h2>Contact Form</h2>
          <Form onSubmit={(e)=>emailSend(e)}>
            <Form.Group controlId="formName" className='mt-3 contactFormGroup'> 
              <Form.Label className='d-flex justify-content-start align-items-start formLabel'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" id="from_name" value={emailJsonToSend.from_name} onChange={(e)=>handleChange(e)} required/>
            </Form.Group>

            <Form.Group className='mt-3 contactFormGroup'>
              <Form.Label className='d-flex justify-content-start align-items-start formLabel'>Contact No.</Form.Label>
              <Form.Control type="tel" placeholder="Enter your contact number" name="contactNo" id="contact_number" value={emailJsonToSend.contact_number} onChange={(e)=>handleChange(e)} required/>
            </Form.Group>

            <Form.Group className='mt-3 contactFormGroup'>
              <Form.Label className='d-flex justify-content-start align-items-start formLabel'>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" id="from_email" value={emailJsonToSend.from_email} onChange={(e)=>handleChange(e)} required/>
            </Form.Group>

            <Form.Group className='mt-3 contactFormGroup'>
              <Form.Label className='d-flex justify-content-start align-items-start formLabel'>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" id='message' value={emailJsonToSend.message} onChange={(e)=>handleChange(e)} required/>
            </Form.Group>

            <Button variant="primary" type="submit" className='d-flex justify-content-start align-items-start mt-1' style={{position:"relative"}}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={6} md={4} lg={5} className='mx-5'>
        <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    )
}
export default Contact;