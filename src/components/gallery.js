import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"



const Carousel1 = () => {
  const containerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const images = [
    './EVENT1.png',
    './EVENT1.png',
    './EVENT1.png'
    // 'https://via.placeholder.com/256?text=Image+3',
    // 'https://via.placeholder.com/256?text=Image+4',
    // 'https://via.placeholder.com/256?text=Image+5',
    // 'https://via.placeholder.com/256?text=Image+6',
    // 'https://via.placeholder.com/256?text=Image+7',
    // 'https://via.placeholder.com/256?text=Image+8',
  ];

  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
      setIsAutoScrolling(false);
    };

    container.addEventListener('wheel', handleWheel);
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    let autoScrollInterval;
    if (isAutoScrolling) {
      autoScrollInterval = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          container.scrollLeft += 1;
        }
      }, 20);
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 200;
    setIsAutoScrolling(false);
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += 200;
    setIsAutoScrolling(false);
  };

  return (
    <div className="flex flex-col  m-auto p-auto">
       <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >
              <h1 className='text-4xl  text-center  font-bold sm:ml-12 py-5 '>Some Previous Event Gallery</h1>
              </motion.div>
             
              

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >
              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (1).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>

              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >
   

              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (1).jpg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >

              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (2).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >

               <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (2).jpg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


             

              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (3).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (4).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (5).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (6).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>  
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (7).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (8).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
              <motion.div 
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
    
    >


              <div className="inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img 
                    src={require('./gallery/1 (9).jpeg')} 
                    
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>

              

              
            
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>
      
      <style jsx="true">{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .z-10 {
          z-index: 10;
        }
        .opacity-75 {
          opacity: 0.75;
        }
        .hover\:opacity-100:hover {
          opacity: 1;
        }
        .transition-opacity {
          transition: opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Carousel1;
