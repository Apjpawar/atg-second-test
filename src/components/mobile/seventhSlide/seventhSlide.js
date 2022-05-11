import React from 'react';
import leftImage from '../../../images/seventhSlide/leftImg.png';
import img1 from '../../../images/seventhSlide/melltoo-img1.png';
import img2 from '../../../images/seventhSlide/melltoo-img2.png';
const SeventhSlide = () => {
    return (
        <div>
            <div className=' w-[100%] min-h-[100vh] relative'>
                <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-[#1f7c3f]'>
                    <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] '>
                        <img src={img2} className=' z-10 min-h-[80%] max-w-[50%] left-[20%]       sm:min-h-[100%]  sm:max-w-[330px] absolute sm:left-[10%] bottom-[-10%] ' />
                        <img src={img1} className=' min-h-[80%] max-w-[37%]  left-[50%]           sm:min-h-[100%] sm:max-w-[250px] absolute  sm:right-[20%] bottom-[-20%]' />
                    </div>
                </div>
                <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center bg-[#209649]'>
                    <div className='text-5xl font-semibold mb-5'>ABC</div>
                    <div className='text-lg mb-10'>This is sample text for ABC 1 This is sample text for ABC 1</div>
                    <div>
                        <span className='text-xl font-semibold'>VIEW CASE STUDY-</span>
                    </div>
                </div>
                <img src={leftImage} className='z-40 w-[70%] h-[10%] sm:h-[15%] absolute top-[45%] border-2 border-[#209649] sm:top-[50%] opacity-100 bg-white rounded-xl left-[5%]' />
            </div>
        </div>
    )
}

export default SeventhSlide