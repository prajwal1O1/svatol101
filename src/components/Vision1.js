import React from 'react'
import { Link } from 'react-router-dom';


export default function Vision1() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={require('./79ada274-18c7-4d45-9c42-66cd6095931a.jpeg')} alt="" className="object-scale-down w-full h-64 rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500 "  />
			<div className="p-6 space-y-2 lg:col-span-5">
				{/* <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"></h3> */}
				{/* <span className="text-xs dark:text-gray-600">February 19, 2021</span> */}
        <h1 className='font-bold text-2xl mb-1'>Vision</h1>

				<p className='font-medium text-xl'>SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...</p>
                <div className="mt-2 flex flex-col sm:flex-row items-center ml-6  ">
              {/* <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-400 text-white font-semibold uppercase hover:bg-teal-300">Start your journey</button> */}
              <Link to="/Calculator"><button  className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:text:green bg-blue-400 ">READ MORE</button></Link> 
            </div>
			</div>
            
		</a>
        
		
	</div>

<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 ">
			<img src={require('./710fda82-eaf4-4afb-8752-173f8cee08e0.jpeg')} alt="" className="object-scale-down w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 "  />
			<div className="p-6 space-y-2 lg:col-span-5">
				{/* <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"></h3> */}
				{/* <span className="text-xs dark:text-gray-600">February 19, 2021</span> */}
        <h1 className='font-bold text-2xl mb-1'>Mission
</h1>

				<p className='font-medium text-xl'>SVATOL Ayurveda Healthcare and Research
Pvt. Ltd. is captivated by the profound wisdom
of the Ayurvedic System of Medicine, fueling
our impassioned quest to revolutionize the
healthcare sector. Our unwavering
commitment is directed towards the delivery
of healthcare services that are not only
efficient,...</p>
                <div className="mt-2 flex flex-col sm:flex-row items-center ml-6  ">
              {/* <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-400 text-white font-semibold uppercase hover:bg-teal-300">Start your journey</button> */}
              <Link to="/Calculator"><button  className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:text:green bg-blue-400 ">READ MORE</button></Link> 
            </div>
			</div>
            
		</a>
        
		
	</div>

</section>
  )
}

