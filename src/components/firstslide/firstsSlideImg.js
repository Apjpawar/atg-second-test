import React, { useEffect, useState } from 'react'
import img from '../../images/firstslideimg.png'
const FirstSlideImg = () => {
  let [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(0);
    const opacityTimer = setInterval(() => {
      setOpacity(opacity += 1);
      if (opacity >= 100) {
        clearInterval(opacityTimer);
      }
    }, 30);
  }, []);

  return (
    <div
      className='w-full'
    >
      <img
        style={{ opacity: '' + opacity + '%' }}
        className=' md:w-[30%] lg:w-[35%] mb-2'
        src={img}
        alt='first slide img'
      />
    </div>
  )
}

export default FirstSlideImg;