/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";

export function OurProductsCarousel({
  items,
  renderItem,
  currentSlide,
  setCurrentSlide,
}) {
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const { language } = useContext(DataContext);

  useEffect(() => {
    const updateProductsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerSlide(3); // Desktop
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
    <div className="lg:pl-2 overflow-hidden w-full mt-10">
      <div
        className="grid transition-transform duration-300"
        style={{
          gridTemplateColumns: `repeat(${productsPerSlide}, minmax(0, 1fr))`, // Adjusts based on screen size
          placeItems: "center",
          gap: "20px", // Gap between cards
          transform: `translateX(${
            language === "ar"
              ? (currentSlide / items.length) * 100
              : -(currentSlide / items.length) * 100
          }%)`, // Handles the sliding effect
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            {renderItem(item)} {/* Rendering the item */}
          </div>
        ))}
      </div>
    </div>
  );
}
