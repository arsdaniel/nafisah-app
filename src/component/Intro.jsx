import "./intro.scss"
import { useState } from "react";
const Intro = () => {
        const [index, setIndex] = useState(0);
        const images = [
          "/img/pizza.png",
          "/img/pizza.png",
          "/img/pizza.png",
        ];
      
        const handleArrow = (direction) =>{
            if(direction==="l"){
                setIndex(index !== 0 ? index-1 : 2)
            }
            if(direction==="r"){
                setIndex(index !== 2 ? index+1 : 0)
            }
        }
      
        return (
          <div className="intro">
            <div className="arrowContainer" style={{ left: 0 }} onClick={()=>handleArrow("l")}>
              <img src="/img/arrowl.png" className="arrowImage"/>
            </div>
            <div className="wrapper" style={{transform:`translateX(${-100*index}vw)`}}>
              {images.map((img, i) => (
                <div className="imgContainer" key={i}>
                  <img src={img} alt=""/>
                </div>
              ))}
            </div>
            <div className="arrowContainer" style={{ right: 0 }} onClick={()=>handleArrow("r")}>
              <img src="/img/arrowr.png"  className="arrowImage"/>
            </div>
          </div>
        );
      };
export default Intro;