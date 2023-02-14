import React from 'react';
import Header from '../Component/Header/Header';
import Feature from './Feature/Feature';
import HeroSection from './HeroSection/HeroSection';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Feature />
            <Testimonial />
        </>
    );
};

export default Home;