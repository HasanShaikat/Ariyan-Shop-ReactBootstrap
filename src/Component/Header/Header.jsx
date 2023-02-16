import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
import { BiMailSend, BiMap, BiPhoneCall } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";


const Header = () => {
    return (
        <section id='header'>
                <div className="top-header py-2">
                    <Container>
                        <Row>
                            <Col md={4}><BiPhoneCall></BiPhoneCall> +88 012 345667</Col>
                            <Col md={4}><BiMailSend></BiMailSend> yourmail@mail.com</Col>
                            <Col md={4} className="address md={text-end}"><BiMap></BiMap> 10 tala market, Banasree, Dhaka</Col>                            
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Navbar collapseOnSelect expand="md">
                        <Navbar.Brand href="#home" ><img src="./logo-color.png" alt="" className='fluid'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#products">Products</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#" className=''>CART <FaCartArrowDown></FaCartArrowDown></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
        </section>
    );
};

export default Header;

// https://michalsnik.github.io/aos/