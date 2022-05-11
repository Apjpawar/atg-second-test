import React, { useEffect, useState } from "react";
import FirstSlideImg from "./firstslide/firstsSlideImg";
import SecondSlidrRightColumn from "./secoundSlide/secoundSlideRightColumn";
import FirstSlideRightColumn from "./firstslide/firstSlideRightColumn";
import ThirdSlideRightColumn from "./thirdSlide/thirdSlideRightColumn";
import ForthSlideText from "./forthSlide/forthSlideText";
import ForthSlideRightColumn from "./forthSlide/forthSlideRightColumn";
import FifthSlideRightColumn from "./fitthSlide/fifthSlideRightColumn";
import FifthSlideText from "./fitthSlide/fifthSlideText";
import SixthSlideRighrColumn from "./sixthSlide/sixthSlideRighrColumn";
import SixthSlideText from "./sixthSlide/sixthSlideText";
import SeventhSlideRightColumn from "./seventhSlide/seventhSlideRightColumn";
import SeventhSlideText from "./seventhSlide/seventhSlideText";
import FirstSlideText from "./firstslide/firstSlideText";
import SecoundSlideText from '../components/secoundSlide/secoundSlideText';
import ThirdSlideText from '../components/thirdSlide/thirdSlideText';
import LeftText from "./firstslide/leftText";
import ForthSlideLeftText from "./forthSlide/forthSlideLeftText";
import ThirdSlideLeftText from "./thirdSlide/thirdSlideLeftText";
import FifthSlideLeftText from "./fitthSlide/fifthSlideLeftText";
import SixthSlideLeftText from "./sixthSlide/sixthSlideLeftText";
import SeventhSlideLeftText from "./seventhSlide/seventhSlideLeftText";
import SecoundSlideLeftText from "./secoundSlide/secoundSlideLeftText";
import SecoundSlideImg from "./secoundSlide/secoundSlideImg";
import SeventhSlideImg from "./seventhSlide/seventhSlideImg";
import img from "../images/pathImages/step-1.png";
import img2 from "../images/pathImages/step-2.png";
import img3 from "../images/pathImages/step-3.png";
import img4 from "../images/pathImages/step-4.png";
import img5 from "../images/pathImages/step-5.png";
import img6 from "../images/pathImages/step-6.png";
import img7 from "../images/pathImages/step-7.png";


const Home = () => {
  const [scroll, setScroll] = useState();
  const [scrollCounter, setScrollCounter] = useState(0);
  const [textCounter, setTextCounter] = useState(0);
  const [colourCounter, setColourCounter] = useState(0);
  const [cnt, setCnt] = useState(false);
  const [leftTextCounter, setLeftTextCounter] = useState(0);
  const [leftImageCounter, setLeftImageCounter] = useState(0);

  let rigtColumns = [
    <FirstSlideRightColumn />,
    <SecondSlidrRightColumn />,
    <ForthSlideRightColumn />,
    <ThirdSlideRightColumn />,
    <FifthSlideRightColumn />,
    <SixthSlideRighrColumn />,
    <SeventhSlideRightColumn />
  ];

  let slideText = [
    <FirstSlideText />,
    <SecoundSlideText />,
    <ForthSlideText />,
    <ThirdSlideText />,
    <FifthSlideText />,
    <SixthSlideText />,
    <SeventhSlideText />
  ];

  let leftText = [
    <LeftText/>,
    <SecoundSlideLeftText/>,
    <ForthSlideLeftText/>,
    <ThirdSlideLeftText/>,
    <FifthSlideLeftText/>,
    <SixthSlideLeftText/>,
    <SeventhSlideLeftText/>,
  ];

  let leftImage = [
    <FirstSlideImg/>,
    <SecoundSlideImg/>,
    <SecoundSlideImg/>,
    <SecoundSlideImg/>,
    <SecoundSlideImg/>,
    <SecoundSlideImg/>,
    <SeventhSlideImg/>
  ];


  let color = [
    '#4c1b8f',
    '#2146a6',
    '#0d0e30',
    '#2d214a',
    '#451cb3',
    '#4c1b8f',
    '#1f7c3f'
  ];


  let StepperImage = [img, img2, img3, img4, img5, img6, img7];

  //  function takes the current scroll
  function stepsAnimation() {
    switch (true) {
      case scroll <= 400:
        setScrollCounter(0);
        setTextCounter(0);
        setColourCounter(0);
        setCnt(false);
        setLeftTextCounter(0);
        setLeftImageCounter(0);
        break;
      case scroll > 400 && scroll <= 800:
        setScrollCounter(1);
        setTextCounter(1);
        setColourCounter(1);
        setCnt(false);
        setLeftTextCounter(1);
        setLeftImageCounter(1);
        break;
      case scroll > 800 && scroll <= 1200:
        setScrollCounter(2);
        setTextCounter(2);
        setColourCounter(2);
        setCnt(true);
        setLeftTextCounter(2);
        setLeftImageCounter(2);
        break;
      case scroll > 1200 && scroll <= 1600:
        setScrollCounter(3);
        setTextCounter(3);
        setColourCounter(3);
        setCnt(false);
        setLeftTextCounter(3);
        setLeftImageCounter(3);
        break;
      case scroll > 1600 && scroll <= 2000:
        setScrollCounter(4);
        setTextCounter(4);
        setColourCounter(4);
        setCnt(false);
        setLeftTextCounter(4);
        setLeftImageCounter(4);
        break;
      case scroll > 2000 && scroll <= 2400:
        setScrollCounter(5);
        setTextCounter(5);
        setColourCounter(5);
        setCnt(false);
        setLeftTextCounter(5);
        setLeftImageCounter(5);
        break;
      case scroll > 2400:
        setScrollCounter(6);
        setTextCounter(6);
        setColourCounter(6);
        setCnt(false);
        setLeftTextCounter(6);
        setLeftImageCounter(6);
        break;
      default:
    }
  }

  // Function for desktop sroll animation which catch current
  // scroll of the screen and pass to animation function
  function handleScroll() {
    var top = this.scrollY;
    setScroll(top);
    console.log(top);
    stepsAnimation(scroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  });

  return (
    <div>
      <div
        style={{ position: "sticky", top: "0" }}
        className=" min-w-[100%] mx-auto h-[screen]   flex overflow-hidden "
      >
        <div style={{ backgroundColor: color[colourCounter] }} className=" w-[45%]  bg-[#4c1b8f]  max-h-[100vh] relative">
          <div
            // style={{ height: "300px", width: "300px" }}
            style={{ backgroundColor: color[colourCounter] }}
            className="bg-blue-600 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-[100%] absolute right-[-110px] mt-[20%] z-10"
          >
            <img
              className="  w-[100%] h-[100%] rounded-[100%]  "
              src={StepperImage[scrollCounter]}
              alt=""
            />
            <div style={cnt ? { top: '25%' } : {}} className="  overflow-hidden  w-[150%] absolute md:top-[28%] lg:top-[30%]  right-[50%] my-auto">
              {slideText[textCounter]}
            </div>
          </div>
          <div className="absolute left-[10%] top-[50%]">
            <div className="w-[200%] mb-2">
              {leftImage[leftImageCounter]}
            </div>
          </div>
          <div className=" text-white w-fit absolute text-left bottom-[8%] left-[10%]  overflow-hidden">
            {leftText[leftTextCounter]}
          </div>
          <div className="absolute text-white bottom-[5%] right-[5%] tracking-[4px]">
            SKIP
          </div>
        </div>
        <div className="w-[55%] h-[screen] relative  ">
          {rigtColumns[scrollCounter]}
        </div>
      </div>
      <div style={{ height: "2800px", widht: "100vw" }}></div>
    </div>
  );
};

export default Home;
