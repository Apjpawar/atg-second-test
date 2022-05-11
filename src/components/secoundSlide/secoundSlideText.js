import React, { useEffect, useState } from 'react'
const SecoundSlideText = () => {
  let [opacity, setOpacity] = useState(0);
  let [top, setTop] = useState(-25);
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
    <div style={{opacity:''+opacity+'%',marginTop:''+top+'%'}} className='text-white text-right  mt-[-25%]'>
        <div className=' text-left md:ml-[135px] lg:ml-[220px] text-xl font-semibold'>The Next Big</div>
        <div className='text-5xl font-bold'>Blockchain</div>
        <div className=' text-xl font-semibold'>Revolution</div>
    </div>
  )
}
export default SecoundSlideText