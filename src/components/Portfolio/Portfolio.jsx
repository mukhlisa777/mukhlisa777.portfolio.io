import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Vue from "../../images/vuecinema.png";
import Dasarent from "../../images/dasarent.png";
import Cornel from "../../images/cornel.png";
import Cornelia from "../../images/cornelia.png";
import Food100 from "../../images/food100.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import  "./Portfolio.css";
import "swiper/css";
function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio container' id='Portfolio'>
        {/* heading */}
        <span className="p-text" style={{color:darkMode? 'white': '',}}>My projects</span>
        <span className="p-text">Portfolio</span>
      

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
               <a href="https://sahifabirinchi.000webhostapp.com/"><img src={Vue} alt="" className='p_img'/></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://mukhlisa777.github.io/dasarent/"><img src={Dasarent} alt="" className='p_img' /></a>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Cornel} alt="" className='p_img' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Cornelia} alt="" className='p_img'/>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://solopicasso.github.io/Cinema_07/"><img src={Food100} alt="" className='p_img'/></a>
            </SwiperSlide>

        </Swiper>
        
    </div>
  )
}

export default Portfolio