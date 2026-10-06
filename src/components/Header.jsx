import React from 'react';
import './components.css';
import { LockKeyhole, SunMoon } from 'lucide-react';
function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="right-navbar">        
          <div className="lock-img">
            <LockKeyhole size={35} color='#ffffff'></LockKeyhole>
          </div>
          <div className="page-title"><p>encryptor</p></div>
          <div className="page-subtitle"><p>secure your passwords with us</p></div>
        </div>
        
        <div className="left-navbar">
          <div className="color-mode"><SunMoon size={35} color='#fff'></SunMoon>
        </div></div>
        
        
      </div>
    </>
  )
}

export default Header
