import React from 'react'
import pizzaBox from '../../../images/thirdSlide/pizza_box.png';
import bottomMobile from '../../../images/thirdSlide/bottom_mobile_img.png';
import topMobile from '../../../images/thirdSlide/top_mobile.img.png';
import mobileImg from '../../../images/thirdSlide/mobile_img.png';
const ForthSlide = () => {
  return (
    <div className=' w-[100%] min-h-[100vh] '>
            <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-[#0F0E2E]'>
                <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] '>
                    <img src={pizzaBox} className=' max-w-[50%] min-h-[20%]  sm:max-w-[250px] absolute top-[-10%] left-[-2%]' />
                    <img src={bottomMobile} className=' max-w-[45%] min-h-[80%] sm:max-w-[250px] absolute left-[2%] bottom-[-25%]' />
                    <img src={topMobile} className=' max-w-[45%] min-h-[80%] sm:max-w-[250px] absolute right-[2%] top-[-25%]' />              
                    <img src={mobileImg} className=' max-w-[45%]   sm:max-w-[250px] absolute right-[2%] bottom-[-20%]' />
                </div>
            </div>

            <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center  bg-[#1B194C]'>
                <div className='text-5xl font-semibold mb-5'>ABC</div>
                <div className='text-lg mb-10'>This is sample text for ABC 1</div>
                <div>
                    <span className='text-xl font-semibold'>VIEW CASE STUDY-</span>
                </div>
            </div>
        </div>
  )
}

export default ForthSlide