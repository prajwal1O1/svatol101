import React from 'react'
import { Link } from 'react-router-dom';





export default function Vision() {
  return (
    <section className="my-8  bg-orange-100 mb-0 mt-0 ">
	<div className="container mx-auto flex flex-col items-left pb-6 mb-4 md:p-10 md:px-12  ">
		<h1 className="text-3xl font-semibold leading-none  text-black">VISION</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2 rounded-sm ">
		<div className="flex flex-col items-center mx-12 lg:mx-0 rounded-3xl border-2  border-indigo-60 mt-10 bg-pink-300 ">
			<div className="relative text-center ">
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-200">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg> */}
				<p className="px-6 py-1 text-lg  text-gray-900 mt-3"> SVATOL Ayurveda Healthcare and Research Pvt. Ltd.
is captivated by the profound wisdom of the
Ayurvedic System of Medicine, fueling our
impassioned quest to revolutionize the healthcare
sector. Our unwavering commitment is directed
towards the delivery of healthcare services that are
not only efficient, effective, and affordable...
</p>
<div className="mt-2 flex flex-col sm:flex-row items-center ml-6  ">
              {/* <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-400 text-white font-semibold uppercase hover:bg-teal-300">Start your journey</button> */}
              <Link to="/Calculator"><button  className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:text:green bg-blue-400 ">READ MORE</button></Link> 
            </div>
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-white">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg> */}
			</div>
			{/* <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p className='text-gray-200'>Vishal Bapat</p> */}
		</div>
<div  className='mt-10'>
<img className='size-96 rounded-lg' src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')}/>

</div>


       
        

        <div className='mt-10'>
        <img className='size-96 rounded-lg' src={require('./710fda82-eaf4-4afb-8752-173f8cee08e0.jpeg')}/>

        </div>

        <div className="flex flex-col items-center mx-12 lg:mx-0 rounded-3xl border-2 border-indigo-60 mt-10 bg-pink-300">
			<div className="relative text-center  ">
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-200">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg> */}
				<p className="px-6 py-3	 text-lg  text-gray-900 mt-3">SVATOL Ayurveda Healthcare and Research
Pvt. Ltd. is captivated by the profound wisdom
of the Ayurvedic System of Medicine, fueling
our impassioned quest to revolutionize the
healthcare sector. Our unwavering
commitment is directed towards the delivery
of healthcare services that are not only
efficient,...
 </p>
 <div className="mt-2 flex flex-col sm:flex-row items-center ml-4  ">
              {/* <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-400 text-white font-semibold uppercase hover:bg-teal-300">Start your journey</button> */}
              <Link to=""><button  className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:text:green bg-blue-400 ">READ MORE</button></Link> 
            </div>
				{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-white">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg> */}
			</div>
			{/* <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p className='text-gray-200 mb-3'>Aniket Pawar</p> */}
		</div>
        
        
		

	</div>
</section>
  )
}
