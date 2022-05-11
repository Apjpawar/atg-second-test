import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import Mobile_home from "./components/mobile/mobile_home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FirstSlide from "./components/mobile/firstSlide/firstSlide";
import SecoundSlide from "./components/mobile/secoundSlide/secoundSlide";
import SeventhSlide from "./components/mobile/seventhSlide/seventhSlide";

function App() {




  const [windowDimenion, detectHW] = useState( window.innerWidth)

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

useEffect(()=>{
  detectSize();
},[])

let render;
if(windowDimenion.winWidth < 768){
    render = (<Mobile_home/>);
}
else {
  render = (<Home/>);
}



  return (
    <div className="App">
       {render}
    </div>
  );
}

export default App;
