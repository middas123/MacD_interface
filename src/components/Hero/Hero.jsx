import React from 'react';
import Chipsjpg from "../../assets/Chips.jpg"

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
              <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                <img 
                  src={Chipsjpg} 
                     className='max-w-[350px] w-full mx-auto sm:scale-125 shadow-1 p-4 rounded-lg'
                />
                <div className='bg-yellow-500 p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
                    <h1 className=''>Fresh Food</h1>
                </div>
              </div>
            </div>
          </div>
       </div>
     </>
  );
};

export default Hero;