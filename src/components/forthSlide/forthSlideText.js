import React, { useEffect, useState } from 'react'
import nasa from '../../images/forthSlide/nasa-mobile-app.png'
const ForthSlideText = () => {
    let [top, setTop] = useState(-25);
    let [opacity, setOpacity] = useState(0);
    useEffect(() => {
      setOpacity(0);
      const opacityTimer = setInterval(() => {
         setOpacity(opacity += 4);
        setTop(top +=1);
        console.log(opacity);
        if (top >= 0) {
          clearInterval(opacityTimer);
        }
      }, 30);
    },[]);
    return (
        <div  style={{opacity:''+opacity+'%',marginTop:''+top+'%'}} className='text-white text-right float-right pb-3 '>
            <div className=' text-left  text-xl '>Text Headline</div>
            <img className='w-[80%]' src={nasa} alt='' />
            <div className=' text-xl mr-[50px] '>Footer headline</div>
        </div>
    )
}
export default ForthSlideText