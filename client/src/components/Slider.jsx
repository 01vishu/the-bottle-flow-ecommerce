import "../style/components/Slider.scss";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import { useState } from "react";
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handlePrevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slider">
      <div className="card">
        <img src={slides[currentIndex]} alt="The Bottle Flow" />
        <div className="slider_button">
          <AiOutlineLeftCircle onClick={handlePrevSlide} />
          <AiOutlineRightCircle onClick={handleNextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
