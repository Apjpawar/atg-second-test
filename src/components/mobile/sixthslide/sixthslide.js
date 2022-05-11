import React from 'react'
import interior from '../../../images/sixthSlide/interior.jpg';
import front from '../../../images/sixthSlide/front.png';

const Sixthslide = () => {
    return (
        <div className=' w-[100%] min-h-[100vh]'>
            <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-purple-900'>
                <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh]'>
                    <img src={interior} className=' w-full' />
                    <img src={front} className=' max-w-[80%] min-h-[80%]  absolute top-[0%] right-[10%]' />
                </div>
            </div>

            <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center bg-[#2520A2]'>
                <div className='text-5xl font-semibold mb-5'>ABC</div>
                <div className='text-lg mb-10'>This is sample text for ABC 1</div>
                <div>
                    <span className='text-xl font-semibold'>VIEW CASE STUDY-</span>
                </div>
            </div>
        </div>
    )
}

export default Sixthslide