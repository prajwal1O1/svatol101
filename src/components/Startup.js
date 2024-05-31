import React from 'react'
import g from  "./doctorimg.jpg"

export default function Startup() {
  return (
   
    <section className="hero " style={{backgroundImage:`url(${g})`}}>
    <div className="content">
    <h1 className='text-cyan-300'>Book An appointments With Doctor Now </h1>
    <p>
"Harmonizing Health, Embracing Ayurveda's Wisdom.
Your Pathway to Holistic Well-being.
Experience Vitality with SVATOL Ayurveda Healthcare."
    </p>
    <a className='hover:text-black' href="#" >Get Started</a>
   
    </div>
    </section>
    
  )
}
