import React from 'react'
import  "./Footer.css";
import Wave from "../../images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Telegram from "@iconscout/react-unicons/icons/uil-telegram";

function Footer() {

  return (
    <div className='footer'>
    <img src={Wave} alt="" className='wave__img'/>
   <div className="f_content">
    <span>mukhlis.777.88@gmail.com</span>
    <div className="f_icons">
        <Insta color='white' siz='3rem' className="footer_icons"/>
        <Github color='white' siz='3rem' className="footer_icons"/>
        <Telegram color='white' siz='3rem' className="footer_icons"/>
    </div>
    <span className='f_text'>Thanks for watching my resume</span>
   </div>
    </div>
  )
}

export default Footer