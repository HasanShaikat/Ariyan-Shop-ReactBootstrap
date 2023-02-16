import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = () => {
        const products = [
          {
            title: 'CREAME',
            shortQuote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: './banner_pic/p-1.jpg',
            price: 17.20,
          },
          {
            title: 'HAND_WATCH',
            shortQuote: 'This product changed my life. I highly recommend it to anyone!',
            image: './banner_pic/p-2.jpg',
            price: 14.70,
          },
          {
            title: 'PERFUME',
            shortQuote: 'This product changed my life. I highly recommend it to anyone!',
            image: './banner_pic/p-3.jpg',
            price: 19.50,
            },
            {
            title: 'COCACOLA',
            shortQuote: 'This product changed my life. I highly recommend it to anyone!',
            image: './banner_pic/p-4.jpg',
            price: 19.50,
            },
            {
                title: 'CREAMES',
                shortQuote: 'This product changed my life. I highly recommend it to anyone!',
                image: './banner_pic/p-5.jpg',
                price: 19.50,
                },
                {
                    title: 'WHITE_CREAME',
                    shortQuote: 'This product changed my life. I highly recommend it to anyone!',
                    image: './banner_pic/p-6.jpg',
                    price: 19.50,
                    },
        ];
    return (
        <div className='py-4'>
            <Container>
                <div>
                    <h3 className='fw-semibold'>Our Products</h3>
                </div>
                <hr />
            <Row>
            {products.map((product) => (
            <Col md={4} key={product.title}>
                <Card className="my-2">
                    <Card.Img className='' src={product.image} />
                    <Card.Body className='p-3 mt-2'>
                        <Card.Title className='fw-bold'>{product.title}</Card.Title>
                            <Card.Text>{product.shortQuote}</Card.Text>
                        <div className='d-flex justify-content-between py-3'>
                            <p className='mb-0'>$ {product.price}</p>
                            <div>
                                <BsBookmarkStarFill className='text-warning'></BsBookmarkStarFill>
                                <BsBookmarkStarFill className='text-warning'></BsBookmarkStarFill>
                                <BsBookmarkStarFill className='text-warning'></BsBookmarkStarFill>
                                <BsBookmarkStarFill className='text-warning'></BsBookmarkStarFill>
                                <BsBookmarkStarFill className='text-warning'></BsBookmarkStarFill>
                            </div>
                            <Nav.Link className='text-danger  roundes fs-5'><AiOutlineShoppingCart></AiOutlineShoppingCart></Nav.Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))}
            </Row>
            </Container>
        </div>
    );
};

export default Products;