import React, { useEffect, useState } from 'react'
const FifthSlideText = () => {
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
    <div
      style={{ opacity: '' + opacity + '%', marginTop: '' + top + '%' }}
      className='text-white text-right'
    >
      <div
        className=' text-left ml-[80px] lg:ml-[155px] text-xl '
      >
        Text Headline
      </div>
      <div
        className='text-5xl font-bold'
      >
        Text Headline
      </div>
      <div
        className=' text-xl'
      >
        Footer headline
      </div>
    </div>
  )
}
export default FifthSlideText