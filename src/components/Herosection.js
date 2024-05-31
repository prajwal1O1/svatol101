
import { Carousel } from 'flowbite-react';

function Testhero() {
  return (
    <div className="bg-[#FFF6E7] ">
      <Carousel className='h-96  bg-[#FFF6E7]'>
        {/* <img src={require('./1.png')}> </img> */}
        <img className='object-scale-down h-70' src={require('./d1.png')}></img>
        <img className='object-scale-down h-75' src={require('./M1.png')}></img>
        <img className='object-scale-down h-96' src={require('./m2.png')}></img>

        {/* <img src={require('./2.png')}> </img> */}
     {/* <img className='' src="https://cdn.pixabay.com/photo/2024/02/02/14/43/ai-generated-8548348_1280.png"></img>
    
        <img className='' src={}"https://cdn.pixabay.com/photo/2024/02/02/14/43/ai-generated-8548348_1280.png"></img> */}
    
      </Carousel>
    </div>
  );
}
export default Testhero