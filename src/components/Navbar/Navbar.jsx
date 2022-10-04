import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'
import {Link} from "react-scroll";
function Navbar() {
  return (
    <div className='n-wrapper container'>
        <div className="n-left">
            <div className="n-name">Muhklisa</div>
          <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                <Link spy={true} to='Intro' activeClass='activeClass' smooth={true}>
                    <li n__item>HOME</li>
                  </Link>
                  <Link spy={true} to='Skills' smooth={true}>
                    <li n-item>Skills</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                    <li n-item>About</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li n-item>Portfolio</li>
                    </Link>
                
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true}>
            <button className="button n-button">contact</button>
            </Link>
        </div>
    </div>
  );
}

export default Navbar;
