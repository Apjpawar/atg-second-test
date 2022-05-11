import React, { useEffect, useState } from 'react';
import pizza_box from '../../images/thirdSlide/pizza_box.png';
import top_mobile from '../../images/thirdSlide/top_mobile.img.png';
import single_bread from '../../images/thirdSlide/dominos-bread_single.png';
import bread from '../../images/thirdSlide/dominos-bread1.png';
import bottom_mobile from '../../images/thirdSlide/bottom_mobile_img.png';
const ThirdSlideRightColumn = () => {
    let [pizzaBoxLeft, setPizzaBoxLeft] = useState(-30);
    let [topMobiletop, setTopMobiletop] = useState(-60);
    let [bottomMobileBottom, setBommtomMobileBottom] = useState(-50);
    let [translateX, setTranslateX] = useState(50);
    let [translateY, setTranslateY] = useState(90);
    let [breadTop, setBreadTop] = useState(-20);

    useEffect(() => {
        const topMobileTimer = setInterval(() => {
            setTopMobiletop(topMobiletop += 1);
            if (pizzaBoxLeft <= -1) {
                setPizzaBoxLeft(pizzaBoxLeft += 0.5);
            }

            if (translateX >= 15) {
                setTranslateX(translateX -= 0.58);
            }

            if (translateY >= 35) {
                setTranslateY(translateY -= 0.91);
            }

            if (bottomMobileBottom <= -1) {
                setBommtomMobileBottom(bottomMobileBottom += 0.83);
            }
            if (topMobiletop >= 5) {
                clearInterval(topMobileTimer);
            }
        }, 30)
        const singleBreadTop = setInterval(() => {
            setBreadTop(breadTop += 0.16);
            if (breadTop >= -10) {
                clearInterval(singleBreadTop);
            }
        }, 30)
    }, [])

    return (
        <div>
            <div className='bg-[#040e1f] h-[100vh] flex sticky top-[0%] left-[0%] overflow-hidden '>

                <img
                    style={{ left: '' + pizzaBoxLeft + '%' }}
                    src={pizza_box} alt=''
                    className='w-[30%] h-[20%] absolute top-[-5%]'


                />
                <img
                    style={{ top: '' + topMobiletop + '%' }}
                    src={top_mobile} alt=''
                    className='w-[30%] md:h-[50%] md:w-[40%] lg:w-[30%] lg:h-[60%] absolute top-[5%] right-[25%]'

                />

                <img
                    style={{ top: '' + breadTop + '%' }}
                    src={single_bread} alt=''
                    className='w-[20%] h-[20%]  absolute top-[-10%] right-[10%] '

                />
                <img
                    style={{ bottom: '' + bottomMobileBottom + '%' }}
                    src={bottom_mobile} alt=''
                    className='w-[40%] md:h-[40%] lg:w-[30%] lg:h-[50%] absolute bottom-0 left-[10%]'
                />

                <img
                    style={{ transform: 'translateX(' + translateX + '%) translateY(' + translateY + '%)' }}
                    src={bread} alt=''
                    className='w-[50%] h-[50%] absolute right-0 bottom-0 translate-x-[15%] translate-y-[35%]'
                />

            </div>
        </div>

    )
}
export default ThirdSlideRightColumn