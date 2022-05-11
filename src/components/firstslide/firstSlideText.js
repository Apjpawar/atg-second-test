import React, { useEffect, useState } from 'react'
const FirstSlideText = () => {
  let [opacity, setOpacity] = useState(0);
  let [top, setTop] = useState(-25);
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
    <div>
      <div
        style={{ opacity: '' + opacity + '%', marginTop: '' + top + '%' }}
      >
        <div
          style={{ fontWeight: '700' }} className='text-4xl lg:text-5xl  font-extrabold  text-white text-right'
        >
          25M+ Downloads
        </div>
        <div
          className='text-right text-xl font-semibold text-red-100 mt-2'
        >
          on appstore & google playstore
        </div>
      </div>
    </div>
  )
}

export default FirstSlideText;