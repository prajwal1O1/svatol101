import React from 'react';
import { GiMeditation } from "react-icons/gi";
import bg from "./a1.jpeg";

function Appointment() {
  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: '50% 70%', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" style={{ backdropFilter: 'blur(1px)' }}></div> {/* Subtle blurred background overlay */}

      <div className=" absolute bg-transparent flex  justify-evenly w-full max-w-screen-lg">
          {/* Left Column */}
          <div className="flex flex-col gap-10 bg-transparent mr-20 ">
            <div className="w-36 h-36 bg-[#1E325F] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5'>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">CENTERS</h1>
                </div>
              </div>
            </div>
            
            <div className="w-36 h-36 bg-[#1ECDBE] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5 bg-transparent'>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-white text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-white text-center ">CENTERS</h1>
                </div>
              </div>
            </div>

            <div className="w-36 h-36 bg-[#1E325F] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5 bg-transparent'>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">CENTERS</h1>
                </div>
              </div>
            </div>
            {/* Add more divs here */}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-10 bg-transparent ml-25 top-5">
            <div className="w-36 h-36 bg-[#1ECDBE] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5 bg-transparent'>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-white text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-white text-center ">CENTERS</h1>
                </div>
              </div>
            </div>

            <div className="w-36 h-36 bg-[#1E325F] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5 bg-transparent'>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1E325F]'>
                  <h1 className="text-white text-center ">CENTERS</h1>
                </div>
              </div>
            </div>

            <div className="w-36 h-36 bg-[#1ECDBE] rounded-full flex flex-col justify-center items-center">
              <GiMeditation size={64} color="white" className='bg-transparent'/>
              <div className='mt-5 '>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-black text-center ">MEDITATION</h1>
                </div>
                <div className='bg-[#1ECDBE]'>
                  <h1 className="text-black text-center ">CENTERS</h1>
                </div>
              </div>
            </div>
            {/* Add more divs here */}
          </div>
        </div>
      </div>
    
    
  );
}

export default Appointment;
