import React from 'react';
import Header from '../Component/Header/Header';
import Feature from './Feature/Feature';
import HeroSection from './HeroSection/HeroSection';
import Products from './Products/Products';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Feature />
            <Products />
            <Testimonial />
        </>
    );
};

export default Home;