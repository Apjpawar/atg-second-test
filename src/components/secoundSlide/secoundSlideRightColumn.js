import React, { useEffect, useState } from 'react';
import img1 from '../../images/secoundSlide/first.png';
import img2 from '../../images/secoundSlide/secound.png';
const SecoundSlideRightColumn = () => {
    let [bottom, setBottom] = useState(-66);
    let [top, settop] = useState(-75);
    useEffect(() => {
        const firstImageTimer = setInterval(() => {
            setBottom(bottom += 1);
            if (bottom >= -6) {
                clearInterval(firstImageTimer);
            }
        }, 20);
        const secoundImageTimer = setInterval(() => {
            settop(top += 1);
            if (top >= -1) {
                clearInterval(secoundImageTimer);
            }
        }, 20);

    }, [])










    return (
        <div>
            <div className='bg-[#062c66] h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden'>

                <img
                    src={img1} alt=''
                    style={{ bottom: '' + bottom + '%' }}
                    className='absolute left-[15%] md:w-[40%] md:h-[50%]  lg:w-[35%] lg:h-[60%]  '
                // className='md:min-w-[50%]  lg:min-w-[40%] xl:w-[30%] xl:h-[60%]  '

                />
                <img
                    src={img2} alt=''
                    style={{ top: '' + top + '%' }}
                    className='md:w-[40%] md:h-[50%] lg:h-[60%] lg:w-[35%] absolute right-[5%]'
                // className='md:min-w-[50%]  lg:min-w-[40%] xl:w-[30%] xl:h-[60%] ' 
                />

            </div>
        </div>
    )
}

export default SecoundSlideRightColumn