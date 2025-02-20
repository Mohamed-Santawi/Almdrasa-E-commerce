import { useContext, useEffect, useState } from "react";
import categories from "../categories";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { SliderControls } from "./SliderControls";
import { CategoriesCard } from "./CategoriesCard";
import { DataContext } from "../DataContext";

export function Categories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(6);
  const { language } = useContext(DataContext);

  // Adjust products per slide based on screen width
  useEffect(() => {
    const updateProductsPerSlide = () => {
      let newProductsPerSlide;
      if (window.innerWidth >= 1024) {
        newProductsPerSlide = 6; // Desktop
      } else if (window.innerWidth >= 768) {
        newProductsPerSlide = 4; // Tablet
      } else {
        newProductsPerSlide = 2; // Mobile
      }
      setProductsPerSlide((prev) => {
        if (prev !== newProductsPerSlide) {
          setCurrentSlide(0); // Reset to first slide on screen change
        }
        return newProductsPerSlide;
      });
    };

    updateProductsPerSlide();
    window.addEventListener("resize", updateProductsPerSlide);
    return () => window.removeEventListener("resize", updateProductsPerSlide);
  }, []);

  // Next Slide Function
  // const nextSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev + 1 < categories.length - productsPerSlide + 1 ? prev + 1 : prev
  //   );
  // };

  // // Previous Slide Function
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  // };
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1; // Move by 1 slide
      return next < categories.length ? next : prev;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1; // Move by 1 slide
      return prevSlide >= 0 ? prevSlide : prev;
    });
  };
  return (
    <Container lgPx="32">
      <div className="flex justify-between items-center">
        <SectionTitle title="Categories" content="Browse By Category" />
        <div className="lg:hidden">
          <SliderControls onNext={nextSlide} onPrev={prevSlide} />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden mt-8 mb-10 lg:pl-10">
        <div
          className="flex transition-transform duration-300 ease-in-out whitespace-nowrap"
          style={{
            transform: `translateX(${
              language === "ar"
                ? currentSlide * (100 / productsPerSlide)
                : -(currentSlide * (100 / productsPerSlide))
            }%)`,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="shrink-0"
              style={{
                width: `${100 / productsPerSlide}%`, // Dynamically adjust width
                paddingRight: "10px", // Ensures proper gap
              }}
            >
              <CategoriesCard category={category} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1400px] mx-auto border-b-[0.5px]"></div>
    </Container>
  );
}
