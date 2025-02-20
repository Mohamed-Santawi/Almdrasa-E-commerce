import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";
import bestSellingProducts from "../bestSellingProducts";
import { Carousel } from "./Carousel";
import { SliderControls } from "./SliderControls";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
export function BestSelling() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const { language } = useContext(DataContext);

  useEffect(() => {
    const updateProductsPerSlide = () => {
      let newProductsPerSlide;
      if (window.innerWidth >= 1024) {
        newProductsPerSlide = 4; // Desktop
      } else if (window.innerWidth >= 768) {
        newProductsPerSlide = 2; // Tablet
      } else {
        newProductsPerSlide = 1; // Mobile
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

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next < bestSellingProducts.length ? next : 0;
    });
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      return prevSlide >= 0 ? prevSlide : bestSellingProducts.length - 1;
    });
  };
  // const nextSlide = () => {
  //   setCurrentSlide(
  //     (prev) =>
  //       prev + productsPerSlide < bestSellingProducts.length
  //         ? prev + productsPerSlide
  //         : 0 // Loop back to the first slide if it's the last one
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prev) =>
  //       prev - productsPerSlide >= 0
  //         ? prev - productsPerSlide
  //         : bestSellingProducts.length - productsPerSlide // Loop back to the last slide if it's the first one
  //   );
  // };
  return (
    <Container>
      <div className="flex justify-between items-center mb-14">
        <SectionTitle title="This Month" content="Best Selling Products" />
        <div className="flex flex-col items-end justify-center relative top-4">
          <button className="bg-Button text-white md:py-4 md:px-12 py-2 px-8 w-[130px] rounded-[4px] md:w-[170px] md:text-base text-sm font-medium md:mb-4 mb-2">
            {language === "ar" ? "اعرض الكل" : "View All"}
          </button>
          <div className="lg:hidden flex items-center justify-end">
            <SliderControls onNext={nextSlide} onPrev={prevSlide} />
          </div>
        </div>
      </div>
      {/* Product Cards */}
      <Carousel
        items={bestSellingProducts}
        renderItem={(product) => <Card product={product} language={language} />}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        productsPerSlide={productsPerSlide}
      />
    </Container>
  );
}
