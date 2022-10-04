import React from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";
import  {useRef,useState}  from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
function Contact() {


  const form = useRef();
 const [done,setDone] =useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l3l9cqd', 'template_j55bhzg', form.current, 'PuykaVkCL7ESbxl82')
      .then((result) => {
          console.log(result.text);
         setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




  return (
    <div className='contact_from container' id='contact'>
    <div className="s-left">
      <div className="s_info">
<span style={{color:darkMode? 'white': '',}}>send massage</span>
<span>contact me</span>
<div className=" blur1"style={{background:"var(--purple)"}}></div>
    <div className=" blur2"style={{background:"var(--blue)"}}></div>
</div>
</div>
<div className="c-right">

  <form ref={form} onSubmit={sendEmail}>
    <input type="text" className="user" name='user__name' placeholder='Name' />
    <input type="email" className="user" name='user__email' placeholder='Email' />
    <textarea name="message" className='user' placeholder='Message'/>
    <input type="submit" className="button" name='user__name' value="Send" />
    <span className='contact_me'>{done && "thanks for contact me!"}</span>
  </form>
</div>


   

    </div>
  )
}

export default Contact