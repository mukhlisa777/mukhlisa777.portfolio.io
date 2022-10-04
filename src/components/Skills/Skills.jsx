import React from 'react';
import './Skills.css';
import { themeContext } from "../../Context";
import { useContext } from "react";
import HeartEmoji from "../../images/heartemoji.png";
import Humble from "../../images/humble.png";
import Cards from '../Cards/Cards';
import { motion } from "framer-motion";
function Skills() {

const transition ={duration:3.5, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (

    <div className='Skills container'id='Skills'>

<div className="s-left">
<div className="s_info">
<span style={{color:darkMode? 'white': '',}}>MY Skills That I Learned</span>
<span >Front-End</span>
<span style={{color:darkMode? 'white': '',}}>Design</span>
<span style={{color:darkMode? 'white': '',}}>I studied all these programms in some learning centers and i very quikly 
    catch what will be interesting to me
</span>
<div className=" blur1"style={{background:"var(--purple)"}}></div>
    <div className=" blur2"style={{background:"var(--blue)"}}></div>
</div>

    </div>




    

        <div className="s-right">
        <motion.div 

initial={{left:'74%'}}
whileInView={{left:'0%'}}
transition={transition}
className="cards">
 <div style={{left:"20rem"}}>
 <Cards
  emoji={HeartEmoji}
  heading = {'Design'}
  detail = {"Figma,Adobe Illustrator,Adobe Photoshop,Affinity Designer,Corel Draw,Adobe XD"} />

  {/* second card */}

 </div>
 <div style={{top:"12rem",left:"4rem"}}>
 <Cards
  emoji={Humble}
  heading = {'Developer'}
  detail = {"Css3,Sass Html,React,Github,Bootstrap, Gulp,Api Javascript,PHP basic"}
  />
 </div>
 
     </motion.div>
        </div>
        <div className="blur"style={{background:"var(--purple)"}}></div>

<div className="blur"
 style={{
 background:'var(--blue)',
 top:'17rem',
 width:'21rem',
 height:'11rem',
 left:'19rem'
 }}>

</div>
</div>









  );
}

export default Skills;
