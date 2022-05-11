import React from 'react'
import img1 from '../../../images/firstSlide/firstMobile.png';
import img2 from '../../../images/firstSlide/secoundMobile.png';
import img3 from '../../../images/firstslideimg.png'
const SecoundSlide = () => {
    return (
        <div>
            <div className=' w-[100%] min-h-[100vh] relative'>
                <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-gray-300'>
                    <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] '>
                        <img src={img1} className=' z-10 max-w-[60%] min-h-[100%]  sm:max-w-[300px] absolute left-[-4%] bottom-[-10%] sm:left-[2%]' />
                        <img src={img2} className=' max-w-[60%] min-h-[100%] sm:max-w-[300px] absolute right-[-5%] sm:right-[2%] bottom-[-10%]' />
                    </div>
                </div>
                <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center bg-purple-900'>
                    <div className='text-5xl font-semibold mb-5'>ABC</div>
                    <div className='text-lg mb-10'>This is sample text for ABC 1 This is sample text for ABC 1</div>
                    <div>
                        <span className='text-xl font-semibold'>VIEW CASE STUDY-</span>
                    </div>
                </div>
                <img src={img3} className='z-40 w-[70%] h-[10%] sm:h-[15%] absolute top-[45%] border-2 border-purple-900 sm:top-[50%] opacity-100 bg-white rounded-xl left-[5%]' />
            </div>
        </div>
    )
}

export default SecoundSlide