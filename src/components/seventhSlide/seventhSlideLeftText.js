import React, { useEffect, useState } from 'react'
const SeventhSlideLeftText = () => {
    let [top, setTop] = useState(-25);
    let [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setOpacity(0);
        const opacityTimer = setInterval(() => {
            setOpacity(opacity += 10);
            setTop(top += 1);
            console.log(opacity);
            if (top >= 0) {
                clearInterval(opacityTimer);
            }
        }, 30);
    }, []);
    return (
        <div >
            <div className='overflow-hidden mb-2'>
                <div style={{ opacity: '' + opacity + '%', marginBottom: '' + top + '%' }} className=" text-4xl lg:text-5xl font-bold lg:pb-5">ABC 234</div>
            </div>
            <div  style={{ opacity: '' + opacity + '%', marginBottom: '' + top + '%' }} className='overflow-hidden  lg:mb-3 ' >
                <div className="text-[17px] ">
                    We are the best
                    <br /> web development company in the world
                </div>
            </div>          
            <div  className='overflow-hidden  '>
                <div className=" mt-2 lg:mt-10 text-[17px] font-normal">View case study</div>
            </div>
        </div>
    )
}
export default SeventhSlideLeftText