/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";

export function Carousel({ items, renderItem, currentSlide, setCurrentSlide }) {
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const { language } = useContext(DataContext);
  useEffect(() => {
    const updateProductsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerSlide(4); // Desktop
      } else if (window.innerWidth >= 768) {
        setProductsPerSlide(2); // Tablet
      } else {
        setProductsPerSlide(1); // Mobile
      }
    };

    updateProductsPerSlide();
    window.addEventListener("resize", updateProductsPerSlide);
    return () => window.removeEventListener("resize", updateProductsPerSlide);
  }, []);

  return (
    <div className="pl-4 lg:px-10 flex overflow-hidden w-full">
      <div
        className="flex transition-transform duration-300 gap-4 "
        style={{
          transform: `translateX(${
            language === "ar"
              ? (currentSlide / items.length) * 100
              : -(currentSlide / items.length) * 100
          }%)`,
        }}
      >
        {" "}
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${
              productsPerSlide === 1
                ? "w-full"
                : productsPerSlide === 2
                ? "w-1/2"
                : "w-1/4"
            } gap-4`}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

