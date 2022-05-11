import React, { useEffect, useState } from 'react'
const SeventhSlideText = () => {
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
    <div style={{ opacity: '' + opacity + '%', marginTop: '' + top + '%' }} className='text-white text-right '>
      <div className=' text-left  md:ml-[170px] lg:ml-[250px] mb-1 text-xl '>Biggest Classified</div>
      <div className='text-5xl font-bold'>East Asia</div>
      <div className=' text-xl mt-1 '>Countries</div>
    </div>
  )
}

export default SeventhSlideText