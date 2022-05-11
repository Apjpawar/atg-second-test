import React from 'react'
import socialMedia from '../../../images/fifthSlide/social-media.png';
import karavan from '../../../images/fifthSlide/karavan_2.png';
import secoundImg from '../../../images/fifthSlide/secoundImg.png';
import social_media_app from '../../../images/fifthSlide/social-media-app.png';
import posts from '../../../images/fifthSlide/posts.png';
const Fifthslide = () => {
    return (
        <div className=' w-[100%] min-h-[100vh] '>
            <div className='min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] relative  overflow-hidden bg-[#27CDDA]'>
                <div className='w-full flex relative min-h-[50vh] sm:min-h-[70vh] sm:max-h-[70vh] '>
                    <img src={socialMedia} className=' max-w-[35%] min-h-[80%]  sm:max-w-[200px] absolute top-[-30%] left-[0%]' />
                    <img src={karavan} className=' max-w-[35%] min-h-[80%] sm:max-w-[200px] absolute left-[0%] bottom-[-30%]' />
                    <img src={secoundImg} className=' max-w-[35%] min-h-[80%] sm:max-w-[200px] absolute left-[35%] top-[-2%]' />
                    <img src={social_media_app} className=' max-w-[35%] min-h-[80%] sm:max-w-[200px] absolute left-[35%] bottom-[-58%]' />
                    <img src={posts} className=' max-w-[35%] min-h-[80%] sm:max-w-[200px] absolute right-[-5%] sm:right-[0%] bottom-[-5%]' />
                </div>
            </div>
            <div className='min-h-[50vh] sm:max-h-[30vh] md:min-h-[30vh] text-left pl-5 text-white flex flex-col justify-center  bg-[#278FDA]'>
                <div className='text-5xl font-semibold mb-5'>ABC</div>
                <div className='text-lg mb-10'>This is sample text for ABC 1</div>
                <div>
                    <span className='text-xl font-semibold'>VIEW CASE STUDY-</span>
                </div>
            </div>
        </div>
    )
}

export default Fifthslide