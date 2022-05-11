import React from 'react'
import Fifthslide from './fifthSlide/fifthslide'
import FirstSlide from './firstSlide/firstSlide'
import ForthSlide from './forthSlide/forthSlide'
import SecoundSlide from './secoundSlide/secoundSlide'
import SeventhSlide from './seventhSlide/seventhSlide'
import Sixthslide from './sixthslide/sixthslide'
import ThirdSide from './thirdSlide/thirdSlide'
import Slider from "react-slick";

const Mobile_home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <SecoundSlide />
        </div>
        <div>
          <FirstSlide />
        </div>
        <div>
          <ThirdSide />
        </div>
        <div>
          <ForthSlide />
        </div>
        <div>
          <Fifthslide />
        </div>
        <div>
          <Sixthslide />
        </div>
        <div>
          <SeventhSlide />
        </div>
      </Slider>
    </div>
  );
}
export default Mobile_home;