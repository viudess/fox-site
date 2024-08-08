import { useState } from "react";
import app1 from "../../public/app1.png"
import app2 from "../../public/app2.png"
import app3 from "../../public/app3.png"
import app4 from "../../public/app4.png"

const slides = [
  { id: 1, url: app1},
  { id: 2, url: app2},
  { id: 3, url: app3},
  { id: 4, url: app4},
];

export default function Carrossel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    return (
        <>
        <div className="flex items-center justify-center">
            <button onClick={goToPrevSlide} className="bg-tpg text-white p-2 rounded-full mr-5 h-10">
            &#9664;
            </button>
            <div className="w-8/12 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                <img src={slide.url} alt={slide.title} className="w-full h-auto" />
                </div>
            ))}
            </div>
            </div>
            <button onClick={goToNextSlide} className="bg-tpg text-white p-2 rounded-full ml-5 h-10">
            &#9654;
            </button>
        </div>
        
        </>
      
    );
}