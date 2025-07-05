import React, { useRef, useEffect } from "react";
import './ImgSlider.css';
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.png";

const images = [

    {
        src: slider1,
        description: "This is the first slide description.",
    },
    {
        src: slider2,
        description: "This is the second slide description.",
    },
    {
        src: slider1,
        description: "This is the third slide description.",
    },

];

const SLIDE_INTERVAL = 3000; // 3 seconds

export default function ImgSlider() {
    const [current, setCurrent] = React.useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, SLIDE_INTERVAL);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <div className="img-slider">
            <div className="img-slider-content">
                <img src={images[current].src} alt={`Slide ${current + 1}`} />
                <p>{images[current].description}</p>
            </div>
            <div className="img-slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => {
                            clearTimeout(timeoutRef.current);
                            setCurrent(index);
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
}