import React from 'react'
import KiddiesmealsImg from "../../assets/Kiddiesmeals.jpg"

const Banner = () => {
  return (
    <>
    <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Image section */}
              <div className='flex justify-center items-center'>
                <img src={KiddiesmealsImg} alt='' className='max-w-[450px] w-full max-auto shadow-1' />
              </div>

            {/* Text content section */}
              <div>
                <p>About</p>
                <h1>Fresh Kiddies Meals</h1>
                <p>
                McDonald's Kiddies Meals are thoughtfully crafted to delight young diners with a perfect blend of nutrition and fun. 
                From savory Chicken McNuggets to wholesome sides like Apple Slices,
                 each meal offers a balanced selection tailored to children's tastes. 
                 Our commitment to quality ensures that every ingredient meets the highest standards, 
                 providing parents with peace of mind. Plus,
                  with a delightful toy included with every meal,
                   McDonald's Kiddies Meals spark joy and excitement, 
                   creating cherished moments for families to enjoy together
                </p>
                <div>
                  <button>View Our Menu</button>
                </div>
              </div>

           </div>
        </div>
    </div>
    </>
  );
};

export default Banner;