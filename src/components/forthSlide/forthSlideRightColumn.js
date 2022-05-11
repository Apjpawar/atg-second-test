import React, { useEffect, useState } from 'react';
import top_img from '../../images/forthSlide/top.png';
import bottom_img from '../../images/forthSlide/bottom.png';
const ForthSlideRightColumn = () => {
  let [firstImgBottom, setFirstImageBottom] = useState(-80);
  let [secoundImgTop, setSecoundImageTop] = useState(-70);
  let [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const firstImageTimer = setInterval(() => {
      setFirstImageBottom(firstImgBottom += 1);
      setSecoundImageTop(secoundImgTop += 0.60);
      if (firstImgBottom >= 5) {
        clearInterval(firstImageTimer);
      }
    }, 20);
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
  },[]);
  return (
    <div>
      <div className='bg-[#141651] h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden'>
        <img
          src={top_img} alt=''
          style={{ bottom: '' + firstImgBottom + '%' }}
          className='absolute left-[15%] bottom-[5%] md:h-[60%] md:min-w-[45%]  lg:min-w-[40%] lg:h-[80%]  '
        />
        <img
          src={bottom_img} alt=''
          style={{ top: '' + secoundImgTop + '%' }}
          className=' md:w-[35%] lg:w-[30%] top-[-15%] absolute right-[5%]'
        />
      </div>
    </div>
  )
}
export default ForthSlideRightColumn