/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function ItemsSlider({ items, itemsPerSlide }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerSlide);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(itemsPerSlide.desktop || 4);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(itemsPerSlide.tablet || 2);
      } else {
        setVisibleItems(itemsPerSlide.mobile || 1);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [itemsPerSlide]);

  return (
    <div className="pl-4 lg:pl-10 flex overflow-hidden w-full">
      <div
        className="flex transition-transform duration-300 gap-4"
        style={{
          transform: `translateX(-${(currentSlide / items.length) * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${
              visibleItems === 1
                ? "w-full"
                : visibleItems === 2
                ? "w-1/2"
                : "w-1/4"
            } ${index === visibleItems ? "pr-8" : ""}`}
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}


