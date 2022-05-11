import React, { useEffect, useState } from 'react'
const SixthSlideText = () => {
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
        <div  style={{opacity:''+opacity+'%',marginTop:''+top+'%'}} className='text-white text-right  '>
            <div className=' text-left md:ml-[80px] lg:ml-[160px] mb-1 text-xl font-semibold'>Developing ERO Solution for</div>
            <div className='text-5xl font-bold'>Text Headline</div>
            <div className=' text-xl mt-1 font-semibold'>in furniture industry</div>
        </div>
    )
}

export default SixthSlideText