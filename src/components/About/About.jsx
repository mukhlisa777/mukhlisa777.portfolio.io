import React from 'react'
import './About.css'
import Html5 from "../../images/html5.png";
import Js from "../../images/css3.png"
import Css3 from "../../images/javascript.png"
import Visula from "../../images/visual.png"
import Scss from "../../images/SCSS.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";




function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='About container' id='About'>
        <div className="a_left">

<div className="a_info">
<span style={{color:darkMode? 'white': '',}}>About My recently job</span>
<span>Brand:Art Caravan</span>
<span a_text style={{color:darkMode? 'white': '',}}>Job title:bag designer</span>
<span style={{color:darkMode? 'white': '',}}>Experience:1.5years
I have been working as a designer in this company for more than a year 
and now I want to change my job.Fashion is not interesting for me</span>
</div>
<a href="https://www.instagram.com/artcaravan/"><button className="button a-button">hire me</button></a>
{/* blurs */}
<div className=" blur1"style={{background:"var(--purple)"}}></div>
    <div className=" blur2"style={{background:"var(--blue)"}}></div>
    </div>
   


  <div className="a_right">
    <motion.div 
        initial={{rotate:90}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="a_mainCricle">
      <div className="a_secCricle">
        <img src={Html5} alt="" />
      </div>
      <div className="a_secCricle">
        <img src={Js} alt="" />
      </div> 
       <div className="a_secCricle">
        <img src={Css3} alt="" />
      </div>
      <div className="a_secCricle">
        <img src={Visula} alt="" />
      </div>
      <div className="a_secCricle">
        <img src={Scss} alt="" />
      </div>
    </motion.div>



    {/* background cricles */}
    <div className="a_backCricle blue_cricle"></div>
    <div className="a_backCricle yellow_cricle"></div>
   
  </div>


    </div>

  )

}

export default About