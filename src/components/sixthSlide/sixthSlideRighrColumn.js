import React, { useEffect, useState } from 'react';
import interior from '../../images/sixthSlide/interior.jpg'
import front from '../../images/sixthSlide/front.png';
const SixthSlideRighrColumn = () => {
    let [bottom, setBottom] = useState(-85);
    useEffect(() => {
        const firstImageTimer = setInterval(() => {
            setBottom(bottom += 1);
            if (bottom >= -1) {
                clearInterval(firstImageTimer);
            }
        }, 10);
    }, [])
    return (
        <div>
            <div className='bg-sky-300 h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden'>
                <img src={interior} />
                <img src={front}
                    style={{ bottom: '' + bottom + '%' }}
                    className=' h-[100%] absolute bottom-[-85%]'
                />
            </div>
        </div>
    )
}
export default SixthSlideRighrColumn