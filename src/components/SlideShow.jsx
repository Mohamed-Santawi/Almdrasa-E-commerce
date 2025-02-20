/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../custom-carousel.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";

export function SlideShow({ slides }) {
  const { language } = useContext(DataContext);
  const [currentSlides, setCurrentSlides] = useState(slides);

  useEffect(() => {
    const updatedSlides = slides.map((item) => ({
      ...item,
      name: language === "ar" ? item.nameAr : item.name,
      deal: language === "ar" ? item.dealAr : item.deal,
    }));
    setCurrentSlides(updatedSlides);
  }, [language, slides]);

  return (
    <div
      className="w-full mx-auto bg-black"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Carousel
        key={language}
        showArrows={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel-root"
        axis={language === "ar" ? "horizontal-reverse" : "horizontal"}
        stopOnHover={false}
        transitionTime={500}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        // dir={language === "ar" ? "rtl" : "ltr"}
      >
        {currentSlides.map((item, index) => (
          <div
            key={`${language}-${item.id}`}
            className={`flex flex-col lg:flex-row justify-center items-center relative`}
          >
            {/* Conditional layout for the first slide */}
            {index === 0 ? (
              <>
                {/* Large Screen Layout */}
                <div className="hidden lg:flex lg:w-[396px] p-4 text-white flex-col justify-center items-center pl-6">
                  <h2 className="lg:text-[18px] text-[13px] flex items-center justify-center font-bold mx-3">
                    <img
                      src={item.logo}
                      alt="Apple Logo"
                      className="mx-4 !w-10 !h-12 sm:!w-8 sm:!h-10 md:!w-6 md:!h-8 lg:![40px] lg:![50px] items-center justify-center"
                    />
                    {item.name}
                  </h2>
                  <p className="lg:text-5xl text-lg w-[294px] h-[120px] lg:leading-[60px] font-semibold mt-2 text-center break-words">
                    {" "}
                    {item.deal}
                  </p>
                  <a href="#" className="text-base font-medium mt-6 underline">
                    {language === "ar" ? "تسوق الآن" : "Shop Now"}
                  </a>
                </div>
                <div
                  className="relative w-full"
                  style={{ display: "block", backgroundColor: "red" }}
                >
                  <img
                    key={`${language}-${index}`}
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="object-cover w-full h-[220px] md:h-[400px] lg:h-[400px]"
                  />
                  {/* Overlay for Mobile and Tablet */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex lg:hidden flex-col justify-center items-center p-4">
                    <h2 className="text-[13px] md:text-base flex items-center justify-center font-bold mx-3">
                      <img
                        src={item.logo}
                        alt="Apple Logo"
                        className="mx-3 !w-6 !h-6 md:!w-8 md:!h-8 items-center justify-center"
                      />
                      {/* {language === "ar" ? item.nameAr : item.name} */}
                      {item.name}
                    </h2>
                    <p className="text-lg md:text-3xl md:w-[180px] w-[120px] h-[50px] font-semibold mt-2 text-center">
                      {/* {language === "ar" ? item.dealAr : item.deal} */}
                      {item.deal}
                    </p>
                    <a
                      href="#"
                      className="lg:text-base text-sm font-medium mt-8 underline"
                    >
                      {language === "ar" ? "تسوق الآن" : "Shop Now"}
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Image with Overlay for All Other Slides */}
                <div className="relative w-full">
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="object-cover w-full h-[220px] md:h-[400px] lg:h-[400px]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-4">
                    <h2 className="text-[13px] md:text-[18px] flex items-center justify-center font-bold mx-3">
                      <img
                        src={item.logo}
                        alt="Apple Logo"
                        className="mx-3 !w-[50px] !h-[30px] md:!w-[100px] md:!h-[70px] items-center justify-center"
                      />
                      {/* {language === "ar" ? item.nameAr : item.name} */}
                      {item.name}
                    </h2>
                    <p className="text-lg md:text-3xl lg:text-5xl lg:w-[294px] lg:h-[120px] lg:leading-[60px] md:w-[180px] w-[120px] h-[50px] font-semibold mt-2 text-center">
                      {/* {language === "ar" ? item.dealAr : item.deal} */}
                      {item.deal}
                    </p>
                    <a
                      href="#"
                      className="lg:text-base text-sm font-medium mt-8 underline"
                    >
                      {language === "ar" ? "تسوق الآن" : "Shop Now"}
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}


