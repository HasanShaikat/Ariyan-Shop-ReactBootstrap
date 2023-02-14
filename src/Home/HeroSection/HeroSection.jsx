import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import './Hero.css';



const HeroSection = () => {
    
    return (
      <>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className='fullBanner w-100 mx-auto fluid text-light'>
              <img src="./banner_pic/banner-1.jpg" alt="" className='fluid'/>
              {/* <div className='banner-contect'>
                <h3>it's working!</h3>
                <h4>Yes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, possimus?</p>
              </div> */}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className='fullBanner w-100 mx-auto text-light'>
              <img src="./banner_pic/banner-2.jpg" alt="" className='fluid'/>
              
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className='fullBanner w-100 mx-auto'>
              <img src="./banner_pic/banner-3.jpg" alt="" className='fluid'/>
              {/* <div className='banner-contect'>
                <h3>it's working!</h3>
                <h4>Yes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, possimus?</p>
              </div> */}
            </div>
          </SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default HeroSection;