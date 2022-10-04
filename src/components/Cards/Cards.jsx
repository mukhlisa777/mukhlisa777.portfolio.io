import React from 'react'
import { themeContext } from "../../Context";
import { useContext } from "react";
import "./Cards.css";
function Cards({emoji,heading,detail}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span style={{color:darkMode? 'white': '',}}>{heading}</span>
        <span style={{color:darkMode? 'white': '',}}>{detail}</span>
        
    </div>
  )
}

export default Cards