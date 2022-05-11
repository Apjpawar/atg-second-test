import React, { useEffect, useState } from 'react'

const ThirdSlideText = () => {
  let [top, setTop] = useState(-25);
  let [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(0);
    const opacityTimer = setInterval(() => {
      setOpacity(opacity += 4);
      setTop(top += 1);
      console.log(opacity);
      if (top >= 0) {
        clearInterval(opacityTimer);
      }
    }, 30);
  }, []);

  return (
    <div style={{ opacity: '' + opacity + '%', marginTop: '' + top + '%' }} className='text-white text-right'>
      <div className=' text-left md:ml-[120px] lg:ml-[195px] text-xl '>Redefining</div>
      <div className='text-5xl font-bold'>UX Strategy</div>
      <div className=' text-xl '>and UI design</div>
    </div>
  )
}

export default ThirdSlideText