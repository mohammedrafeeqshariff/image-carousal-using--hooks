import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex,setCurrIndex] = useState(0)

    function moveBackward(){
        if(currIndex==0){
            setCurrIndex(images.length-1)
          }else{
            setCurrIndex(currIndex-1)
          }
    }

    function moveForward(){
        if(currIndex==images.length-1){
            setCurrIndex(0)
          }else{
            setCurrIndex(currIndex+1)
          } 
    }

    return(
        <>
            <div className="main-container">
                <button id="backwardIcon" className="arrow" onClick={moveBackward}>
                    <ArrowBackIosIcon/>
                </button>
                <div className="image-container">
                    <div className="title-box">
                        <h3>{images[currIndex].title}</h3>
                    </div>
                    <div className="image">
                        <img src={images[currIndex].img} alt={images[currIndex].title} />
                    </div>
                    <div className="subtitle-box">
                        <h5>{images[currIndex].subtitle}</h5>
                    </div>
                </div>
                <button id="forwardIcon"  className="arrow" onClick={moveForward}>
                    <ArrowForwardIosIcon/>
                </button>
            </div>
        </>
    )
}

export default Carousel;