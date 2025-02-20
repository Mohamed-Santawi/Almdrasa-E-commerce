/* eslint-disable react/prop-types */
import { useContext } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { DataContext } from "../DataContext";
export function SliderControls({
  onPrev,
  onNext,
  className = "",
  prevIcon,
  nextIcon,
}) {
  const { language } = useContext(DataContext);
  return (
    <div
      className={`flex gap-2 lg:gap-4 mt-4 lg:mt-0 ${className} ${
        language === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <button
        className="w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center"
        onClick={onPrev}
      >
        {prevIcon || (
          <img src={language === "ar" ? rightArrow : leftArrow} alt="Arrow" />
        )}
      </button>
      <button
        className="w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center"
        onClick={onNext}
      >
        {nextIcon || (
          <img src={language === "ar" ? leftArrow : rightArrow} alt="Arrow" />
        )}
      </button>
    </div>
  );
}

