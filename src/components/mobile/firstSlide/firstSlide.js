import React from 'react';
import img1 from '../../../images/secoundSlide/first.png';
import img2 from '../../../images/secoundSlide/secound.png';
const FirstSlide = () => {
    return (
        <div className=' w-[100%] min-h-[100vh] '>
            <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-purple-900'>
                <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] '>
                    <img src={img1} className=' max-w-[50%] min-h-[80%]  sm:max-w-[250px] absolute bottom-[-10%] left-[2%]' />
                    <img src={img2} className=' max-w-[45%] min-h-[80%] sm:max-w-[250px] absolute right-[2%] top-[-20%]' />
                </div>
            </div>

            <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center  bg-[#d329e2]'>
                <div className='text-5xl font-semibold mb-5'>ABC</div>
                <div className='text-lg mb-10'>This is sample text for ABC 1</div>
                <div>
                    <span className='text-xl font-semibold'>CASE STUDY-</span>
                    <span className='bg-purple-600 text-lg ml-5 rounded-full py-3 px-4'>Coming Soon</span>
                </div>
            </div>
        </div>
    )
}

export default FirstSlide