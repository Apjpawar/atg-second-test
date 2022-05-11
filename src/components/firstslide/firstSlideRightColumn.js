import React, { useEffect, useState } from 'react';
import img1 from '../../images/firstSlide/firstMobile.png';
import img2 from '../../images/firstSlide/secoundMobile.png';
const FirstSlideRightColumn = (props) => {
    let [firstImageBottom, setFirstImageBottom] = useState(-300);
    let [firstImageOpacity, setFirstImageOpacity] = useState(0);
    let [secoundImageBottom, setSecoundImageBottom] = useState(-700);
    let [secoundImageOpacity, setSecoundImageOpacity] = useState(0);
    let [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const firstImageTimer = setInterval(() => {
            setFirstImageBottom(firstImageBottom += 5);
            setFirstImageOpacity(firstImageOpacity += 0.016)
            if (firstImageBottom >= 0) {
                clearInterval(firstImageTimer);
            }
        }, 20);

        const secoundImageTimer = setInterval(() => {
            setSecoundImageBottom(secoundImageBottom += 5);
            setSecoundImageOpacity(secoundImageOpacity += 0.014)
            if (secoundImageBottom >= 1) {
                clearInterval(secoundImageTimer);
            }
        }, 10);

    }, [])


    useEffect(() => {
        setOpacity(0);
        const opacityTimer = setInterval(() => {
            setOpacity(opacity += 2);
            console.log(opacity);
            if (opacity >= 100) {
                clearInterval(opacityTimer);
            }
        }, 30);
    }, []);



    return (
        <div
            className='bg-gray-300 h-[100vh] sticky top-[0%] left-[0%]'
        >
            <div
                className='flex w-full h-full items-center justify-center sticky'
            >
                <img
                    style={{ marginBottom: '' + firstImageBottom + 'px', opacity: '' + firstImageOpacity + '' }}
                    className='md:min-w-[50%]  lg:min-w-[40%] xl:w-[30%]  '
                    src={img1} alt='img1'
                />
                <img
                    style={{ marginBottom: '' + secoundImageBottom + 'px', opacity: '' + secoundImageOpacity + '' }}
                    className='md:min-w-[50%] lg:min-w-[40%] xl:w-[30%] '
                    src={img2} alt='img1'
                />
            </div>
        </div>
    )
}

export default FirstSlideRightColumn;