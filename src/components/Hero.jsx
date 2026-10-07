import React from 'react';
import { ShieldCheck } from 'lucide-react'
function Hero() {
  return (
    <div className='hero-section'>
      <div className="hero-icon">
        <div className="line-decoration left">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
          <ShieldCheck size={80} color='#267A68' strokeWidth={1.8}></ShieldCheck>
        
        <div className="line-decoration right">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="hero-text">
        <h1>text encryption & decryption</h1>
        <p> Enter your text, choose an action and keep your data secure</p>
      </div>
    </div>
  )
}

export default Hero
