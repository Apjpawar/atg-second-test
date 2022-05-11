import React, { useEffect, useState } from 'react';
import img1 from '../../images/seventhSlide/melltoo-img1.png';
import img2 from '../../images/seventhSlide/melltoo-img2.png';
const SeventhSlideRightColumn = () => {
    let [bottom, setBottom] = useState(-16);
    useEffect(() => {
        const opacityTimer = setInterval(() => {
            setBottom(bottom += 0.5);
            if (bottom >= -6) {
                clearInterval(opacityTimer);
            }
        }, 30);
    }, []);
    return (
        <div>
            <div className='bg-[#209649] h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden'>
                <img src={img1}
                    style={{ bottom: '' + bottom + '%' }}
                    className='h-[65%] lg:h-[80%] absolute bottom-[-16%] right-[5%]'
                />
                <img src={img2}
                    className='h-[65%] lg:h-[80%] absolute bottom-[-12%] right-[26%]'
                />
            </div>
        </div>
    )
}
export default SeventhSlideRightColumn