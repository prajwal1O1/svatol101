import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


// bg-rgb(141,218,141)

export default function NB() {
    const [navbar, setNavbar] = useState(false);


    
    return (
        <nav className="w-full sticky top-0 left-0 lg:max-w-7xl  z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  backdrop-blur-md   lg:h-14">
                <div>
                       
                    <div className="flex items-center justify-between py-3 md:py-5  md:block ">
                        
                           <a href="javascript:void(0)">
                     <Link to="/">   <img   className="opacity-100 mt-0 pt-0  h-16 ml-1   w-20 object-scale-down bg-transparent" src={require('./Logo.png')}></img></Link>
                             
                        </a>  

                        
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                            <div class='flex lg:ml-auto max-lg:w-full'>
        
      </div>
      <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                            <Link  to="/">HOME</Link>
                            </li>
                            <li className="text-gray-900 hover:text-orange font-bold">
                            <Link to="/"></Link>
                            </li>

                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                            <Link to="/Services">SERVICES </Link>
                            </li>


                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                            <Link  to="/Our_Doctors"> OUR DOCTORS</Link>
                            </li>

                          <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                            <Link to="/Events">EVENTS</Link>
                            </li>
                           
                            

                           
                            <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-900 text-[15px] font-bold lg:hover:fill-[#007bff] block'>ABOUT US <svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg bg-black px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50'>
             <li class='border-b py-2 '><a href='/About'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>ABOUT SVATOL</a></li>
            <li class='border-b py-2 '><a href='/About'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>RESEARCH FINDINGS</a></li>
            <li class='border-b py-2 '><a href='/About'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>SUCCESS STORIES</a></li>
            <li class='border-b py-2 '><a href='/About'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>UPCOMING EVENTS</a></li>
            <li class='border-b py-2 '><a href='/About'
                class='hover:text-[#007bff] text-white text-[15px] font-bold block'>FEATURED ARTICLES</a></li>
               
          
          </ul>
        </li>
                            <li>
                            <a href="https://www.youtube.com/" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaYoutube  size={23} />
                    </a>
                   
                    </li>

                    <li>
                            <a href="https://www.youtube.com/" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaInstagram  size={23} />
                    </a>
                   
                    </li>

                    <li>
                            <a href="https://www.youtube.com/" class="text-blue-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaFacebook  size={23} />
                    </a>
                   
                    </li>
                            {/* <li className="text-gray-100 hover:text-[#7B553C] font-bold">
                            <Link to="/contact">Rooftop</Link>
                            </li> */}
                         
                            {/* <li>
                            <a href="https://www.youtube.com/@dr.bapuraochopade7569/videos" class="text-red-600 hover:text-gray-500">
                    <span class="sr-only">Youtube</span>
                    < FaYoutube  size={23} />
                    </a>
                    </li> */}
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
        </nav>
    );
}