import React, { useEffect, useState } from 'react';
import socialMediaImg from '../../images/fifthSlide/social-media.png';
import secoundImg from '../../images/fifthSlide/secoundImg.png'
import posts from '../../images/fifthSlide/posts.png'
import socialMediaApp from '../../images/fifthSlide/social-media-app.png'
import karavan from '../../images/fifthSlide/karavan_2.png'
const FifthSlideRightColumn = () => {
  let [socialMediaImageTop, setSocialMediImageTop] = useState(-10);
  let [secoundImageTop, setSecoundImageTop] = useState(0);
  let [socialMediaAppBottom, setSocialMediaAppBottom] = useState(-20);
  let [karavanBottom, setKaravanBottom] = useState(-10);
  useEffect(() => {
    const firstImageTimer = setInterval(() => {
      setSocialMediaAppBottom(socialMediaAppBottom = socialMediaAppBottom - 0.5);
      setSocialMediImageTop(socialMediaImageTop -= 0.4);
      setSecoundImageTop(secoundImageTop -= 0.25);
      setKaravanBottom(karavanBottom -= 0.35);
      if (socialMediaAppBottom <= -30) {
        clearInterval(firstImageTimer);
      }
    }, 20);
  }, [])

  return (
    <div>
      <div 
        className='bg-sky-300 h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden'
      >

        <img
          style={{ top: '' + socialMediaImageTop + '%' }}
          src={socialMediaImg} alt=''
          className=' md:h-[50%] lg:h-[60%] absolute left-[12%] top-[-18%]'
        />
        <img
          style={{ top: '' + secoundImageTop + '%' }}
          src={secoundImg} alt=''
          className=' md:h-[50%] lg:h-[60%]  absolute left-[42%] top-[-5%] '
        />
        <img
          src={posts} alt=''
          className=' md:h-[50%] lg:h-[60%]  absolute  md:right-[0%] lg:top-[20%] md:[top:38.5%] '
        />
        <img
          style={{ bottom: '' + socialMediaAppBottom + '%' }}
          src={socialMediaApp} alt=''
          className=' md:h-[50%] lg:h-[60%] absolute left-[42%] bottom-[-30%]'
        />
        <img
          style={{ bottom: '' + karavanBottom + '%' }}
          src={karavan} alt=''
          className=' md:h-[50%] lg:h-[60%] absolute left-[12%] bottom-[-17%]  '
        />
      </div>
    </div>
  )
}
export default FifthSlideRightColumn