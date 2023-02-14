import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsFillPatchCheckFill } from "react-icons/bs";


const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'This product changed my life. I highly recommend it to anyone!',
      image: './banner_pic/testimonial-1.jpg',
    },
    {
      name: 'Jane Smith',
      quote: 'I have never been happier with a purchase. Thank you for creating such a great product!',
      image: './banner_pic/testimonial-2.jpg',
    },
    {
        name: 'Jane Mane',
        quote: 'I have never been happier with a purchase. Thank you for creating such a great product!',
        image: './banner_pic/testimonial-3.jpg',
      },
  ];

  return (
    <div style={{background: "#c1e2f05b"}} className="py-4">
        <Container>
            <div>
                <p className='fw-bold'>TESTIMONIAL</p>
                <h4 className='fw-semibold' >Our satisfied customer says !</h4>
                <hr />
            </div>
            <Row>
            {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.name}>
                <Card className="border-0 pt-2">
                <div className="d-flex justify-content-center align-items-center">
                <Card.Img className='w-25 rounded-pill me-3' src={testimonial.image} />
                <Card.Title className='fw-bold'>{testimonial.name} <BsFillPatchCheckFill className='text-success'></BsFillPatchCheckFill></Card.Title>
                </div>
                <Card.Body className='p-3 mt-2' border="primary">
                    <Card.Text>"{testimonial.quote}"</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
            </Row>
        </Container>
    </div>
  );
};

export default Testimonial;