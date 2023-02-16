import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { ImFire } from "react-icons/im";
import { FaShippingFast} from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { BsBookmarkStarFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
import './Feature.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
import "swiper/css/pagination";

AOS.init();

const Feature = () => {
    return (
        <>

        {/* Free Shipping  */}
        <div data-aos="fade-right" data-aos-duration="1000">
            <Container className="my-5">
            <Row>
                <Col lg={3} md={4} sm={6} className="py-3">
                    <div className="free-shipping text-center">
                        
                            <FaShippingFast className='rounded-circle ship-icon p-5'>
                            </FaShippingFast>
                        
                        <div className='pt-3'>
                            <h5>FREE SHIPPING</h5>
                            <span className='text-muted'>ON ORDER OVER $100</span>
                        </div>
                    </div>
                </Col>
                
                <Col lg={3} md={4} sm={6} className="py-3">
                    <div className="qualify text-center">
                        
                            <IoMdRibbon className='rounded-circle qualify-icon p-5'>
                            </IoMdRibbon>
                        
                        <div className='pt-3'>
                            <h5>SUPERIOR QUALITY</h5>
                            <span className='text-muted'>QUALITY PRODUCTS</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6} className="py-3">
                    <div className="free-shipping text-center">
                        
                            <FaShippingFast className='rounded-circle ship-icon p-5'>
                            </FaShippingFast>
                        
                        <div className='pt-3'>
                            <h5>FREE SHIPPING</h5>
                            <span className='text-muted'>ON ORDER OVER $100</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={4} sm={6} className="py-3">
                    <div className="support text-center">
                        
                            <MdSupportAgent className='rounded-circle support-icon p-5'>
                            </MdSupportAgent>
                        
                        <div className='pt-3'>
                            <h5>SUPPORT</h5>
                            <span className='text-muted'>24/7 SUPPORT</span>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
        </div>
        
            <div className="feature-items">
            <Container className="py-4">
                <div className="feature-top">
                    <h3 className='pt-2 fw-semibold'>Top Selling Products <ImFire className='text-warning fs-3'></ImFire></h3>
                </div>
                <hr />
            <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    400:{
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper pb-5 pt-3"
                >
                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-1.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-2.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsFillStarFill className='fs-4 text-warning'></BsFillStarFill>
                                        <BsFillStarFill className='fs-4 text-warning'></BsFillStarFill>
                                        <BsFillStarFill className='fs-4 text-warning'></BsFillStarFill>
                                        <BsFillStarFill className='fs-4 text-warning'></BsFillStarFill>
                                        <BsStarHalf className='fs-4 text-warning'></BsStarHalf>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-3.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-4.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-5.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card className="border-0">
                            <Card.Img variant="top" src="./banner_pic/p-6.jpg" />
                            <Card.Body>
                                <Card.Title className='fw-semibold'>Face Creame</Card.Title>
                                <Card.Text className=''>
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <h5 className='fw-bold py-1'>$18.09</h5>
                                    <span className="star">
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                        <BsBookmarkStarFill className='fs-4 text-warning'></BsBookmarkStarFill>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                            <Nav.Link className='fw-semibold border p-2 text-light w-100 rounded-bottom' style={{background: "#99b7b5"}}><span>ADD TO CART</span></Nav.Link>
                        </Card>
                    </SwiperSlide>
            </Swiper>
            </Container>
            </div>
        </>
    );
};

export default Feature;