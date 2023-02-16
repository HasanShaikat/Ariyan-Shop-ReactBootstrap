import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram, BsBank2, BsPaypal } from 'react-icons/bs';
import { BiMap, BiMailSend, BiPhone } from 'react-icons/bi';
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { SiPayoneer } from "react-icons/si";

const Footer = () => {
    return (
        <div>
          <Container fluid className="py-4">
          <Container>
            <Row>
              <Col md={4}>
                <img src="./logo-color.png" alt="" className='fluid w-50 pb-4'/>
                <p className='text-justify'>We are grateful for the support of our loyal customers and partners, and we are constantly seeking new ways to improve our products and services. If you have any questions or feedback, please don't hesitate to get in touch with us using the contact form on our website.
                <br />
                Thank you for choosing <span className='fw-bold'>ARIYAN SHOP</span>, and we look forward to serving you for years to come.</p>
                <div className="d-flex justify-content-around fs-5">
                  <Nav.Link><BsTwitter className='text-primary'></BsTwitter></Nav.Link>
                            <Nav.Link><BsFacebook className='text-primary'></BsFacebook></Nav.Link>
                            <Nav.Link><BsLinkedin className='text-primary'></BsLinkedin></Nav.Link>
                            <Nav.Link><BsInstagram className='text-danger'></BsInstagram></Nav.Link>
                        </div>
          </Col>
          <Col md={4} className="pt-5">
            <h5 className="fw-semibold">Links</h5>
            <Nav className='pt-4 d-grid'>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="pt-5">
            <h5 className='pb-4 fw-semibold'>Have a Questions?</h5>
            <p><BiMap className='text-primary fs-5'></BiMap> 1234 Main Street Anytown, USA 12345</p>
            <p><BiMailSend className='text-danger fs-5'></BiMailSend> info@shopname.com</p>
            <p><BiPhone className='text-primary fs-5'></BiPhone> 555-555-5555</p>

            <div className='d-flex gap-3 fs-4'>
              <Nav.Link className='text-danger'><FaCcMastercard></FaCcMastercard></Nav.Link>
              <Nav.Link ><BsBank2></BsBank2></Nav.Link>
              <Nav.Link className='text-primary'><RiVisaFill></RiVisaFill></Nav.Link>
              <Nav.Link className='text-primary'><BsPaypal></BsPaypal></Nav.Link>
              <Nav.Link className='text-danger'><SiPayoneer></SiPayoneer></Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
            
        </div>
    );
};

export default Footer;