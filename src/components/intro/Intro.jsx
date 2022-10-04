import React from 'react';
import './Intro.css';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Thumbump from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {

  const transition ={duration : 2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
  <div className="Intro container" id='Intro'>
    <div className="i-left">
   <div className="i-name">
   <span style={{color:darkMode? 'white': '',}}>Hi! I AM</span>
   <span>Mukhlisa Rayimova</span>
   <span style={{color:darkMode? 'white': '',}}>Front-end Developer 
   I'm currently have no work experience in this field.
   I am looking for a job to again work experience in this feild.
   I am a very active,quick learner and finish my work on time
   </span>
   </div>
   <button className="i-button button">Click me</button>
   <div className="i-icons">
    <img src={Github}  alt="Github" />
    <img src={LinkedIn}  alt="LinkedIn" />
    <img src={Instagram} alt="Instagram" />
   </div>
    </div>
  
    <div className="i-right">
   

    <motion.div style={{top:'-5%', left:'40%'}}
    
    initial={{top:'50%',left:'74%'}}
    whileInView={{left:'40%'}}
    transition={transition}
      className='Thumbump'>
    
  <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
    </motion.div>
     

        <motion.div 
      
        initial={{top:'25%',
        left:'50%'}}
        whileInView={{left:'40%'}}
        transition={transition}
        className='Thumbump'>
        <FloatingDiv image={Thumbump} txt1='Desinger'/>
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
  )
}

export default Intro
