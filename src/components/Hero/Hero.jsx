import React from 'react';
import Burgersjpg from "../../assets/Burgers.jpg"

const Hero = () => {
  return (
     <>
       <div className='min-h-[550px] sm:min-h[]-[600px] bg-lightBlue flex justify-center items-center'>
          <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
              {/* text content section */}
               <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                  <h1 className='text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary-90 font-cursive'>
                    Burger
                  <span className='text-3xl font-sans text-dark'>Sbwl</span>
                  </h1>
                  <p  className='text-sm text-dark'>
                    {""}
                    Welcome to McDonald's - where every bite tells a story of tradition,
                     quality, and pure satisfaction. Our burgers are more than just a meal; 
                     they're a timeless indulgence that brings people together, 
                     creating moments of joy and connection. 
                     Join us in celebrating the irresistible taste and cherished memories 
                     that make McDonald's burgers an iconic favorite worldwide.
                  </p>
                  <div>
                    <button className='primary-btn'>View Our Menu</button>
                  </div>
               </div>

              {/* Hero Image Section  */}
              <div>
                <img src={Burgersjpg} />
              </div>
            </div>
          </div>
       </div>
     </>
  );
};

export default Hero;