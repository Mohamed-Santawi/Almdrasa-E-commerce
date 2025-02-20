/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { Container } from "./Container";
import React from "react";
import Countdown from "react-countdown";
import jbl from "../assets/jbl.png";
import clsx from "clsx";

// Function to convert numbers to Arabic numerals
const toArabicNumerals = (num) => {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumerals[digit] || digit)
    .join("");
};

// Function to add leading zero and convert to Arabic if needed
const addLeadingZero = (num, language) => {
  const formattedNum = num < 10 ? `0${num}` : num;
  return language === "ar" ? toArabicNumerals(formattedNum) : formattedNum;
};

// Time unit component
const TimeUnit = ({ label, value, language }) => (
  <div className="flex flex-col items-center justify-center bg-white lg:w-[62px] lg:h-[62px] md:w-[50px] md:h-[50px] w-[45px] h-[45px] rounded-[50%] mt-4 lg:mt-6">
    <span className="text-[12px] lg:text-base font-semibold">
      {addLeadingZero(value, language)}
    </span>
    <span className="text-[10px] lg:text-[11px] font-normal lg:leading-[18px]">
      {label}
    </span>
  </div>
);

export function JBLPoster() {
  const { language } = useContext(DataContext); // Get language from context
  const [targetDate] = useState(Date.now() + 5 * 24 * 60 * 60 * 1000); // Countdown target date

  // Renderer function for the countdown timer
  const renderer = ({ days, hours, minutes, seconds }) => {
    const timeUnits = [
      { label: language === "en" ? "Hours" : "ساعات", value: hours },
      { label: language === "en" ? "Days" : "أيام", value: days },
      { label: language === "en" ? "Minutes" : "دقائق", value: minutes },
      { label: language === "en" ? "Seconds" : "ثواني", value: seconds },
    ];

    return (
      <div
        className={`flex ${
          language === "ar" ? "flex-row-reverse" : "space-x-2"
        } md:space-x-4`}
      >
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <TimeUnit
              label={unit.label}
              value={unit.value}
              language={language}
            />
            {index < timeUnits.length - 1}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <Container lgPx="36">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center sm:my-auto bg-black w-full lg:h-[500px] md:h-[570px] h-[450px] mb-8">
        {/* Image - Moves First on Mobile, order adjusts for RTL */}
        <img
          src={jbl}
          alt="JBL Sound System"
          className={`lg:mx-8 lg:w-[568px] lg:h-[330px] md:w-[450px] w-[300px] lg:pr-12 order-1 lg:order-2 mb-6 md:mt-6 lg:mt-0 ${
            language === "ar" ? "order-2 lg:order-1 mt-8" : "order-1"
          }`}
        />

        {/* Content */}
        <div
          className={clsx(
            "flex flex-col lg:pl-[48px] px-4 md:pl-6 w-full lg:w-[550px]",
            { "md:pr-6": language === "ar" } // Apply right text alignment for Arabic
          )}
        >
          <h5 className="lg:text-base text-sm font-semibold lg:mb-4 mb-2 text-[#00FF66]">
            {language === "en" ? "Categories" : "الفئات"}
          </h5>
          <p
            className={clsx(
              "text-white font-inter lg:text-[48px] md:text-2xl text-xl font-semibold lg:tracking-[0.2rem] md:tracking-[0.1rem] tracking-[0.08rem] lg:leading-[60px] mb-4",
              { "lg:text-[49px]": language === "ar" }
            )}
          >
            {language === "en"
              ? "Enhance Your Music Experience"
              : "تعزيز تجربة الموسيقى الخاصة بك"}
          </p>
          <Countdown date={targetDate} renderer={renderer} />
          <button className="bg-[#00FF66] text-white text-base font-medium lg:py-4 lg:px-12 py-2 px-8 rounded-[4px] mt-8 lg:mt-12 md:w-[171px] w-full">
            {language === "en" ? "Buy Now" : "اشترِ الآن"}
          </button>
        </div>
      </div>
    </Container>
  );
}
