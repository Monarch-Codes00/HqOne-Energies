import React from "react";
import hvid from '../assets/hero back vid.mp4'
import whatsapp from "../assets/whats.png"


function Hero(){

    return(
        <>
        <section className="hero-section" 
        style={{position:"relative",
         height:"101vh",
          width:"1264px",
          marginTop:"-96px",
          zIndex:0,
          marginLeft:"-10px",
           backgroundColor:"red"}}>

            <div style={{position:"absolute",
                 top:0,
                  left:0, 
                  width:"100%",
                   height:"100%",
                    backgroundColor:"wheat",
                     zIndex:0}}>

<video className='videoTag' autoPlay loop muted style={{width:"100%", }}>
    <source src={hvid} type='video/mp4' />
</video>
<div className="text1st">
    <h3>WE ARE KNOWN FOR:</h3>

    <p style={{fontWeight:"600", fontSize:"50px",marginTop:"0px" }}>Lorem ipsum dolor oluptatem vero ipsa repellendus.</p>
</div>
<div className="hero-button-hold">
  <button className="red-to-white"> VISIT OUR SHOP</button>
    <button  className="tan-to-white">REQUEST A QUOTE </button>   
    </div> 
    <button className="whatsappBtn">WhatsApp us</button>
</div>
       
        
        
        </section>
        
        
        </>
    )


























}

export default Hero
