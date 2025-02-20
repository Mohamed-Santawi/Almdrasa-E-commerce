/* eslint-disable no-unused-vars */
import { SectionTitle } from "./SectionTitle";
import { Container } from "./Container";
import products from "../productsShow";
import { OurProductsCarousel } from "./OurProductsCarousel";
import { Card } from "./Card";
import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
export function OurProducts() {
  const selectedProductIds = [12, 13, 6, 14, 15, 16, 9, 5];
  const filteredProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(4);
  const { language } = useContext(DataContext);
  return (
    <Container>
      <SectionTitle title={"Our Products"} content={"Explore Our Products"} />
      <OurProductsCarousel
        items={filteredProducts}
        renderItem={(product) => <Card product={product} language={language} inOurProducts />}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        productsPerSlide={productsPerSlide}
      />
      <button className="bg-Button text-white md:py-4 md:px-12 py-2 px-8 w-[190px] rounded-[4px] md:w-[235px] md:text-base text-sm font-medium md:mb-4 mb-2 flex items-center justify-center mx-auto">
        {language === "ar" ? "اعرض الكل" : "View All Products"}
      </button>
    </Container>
  );
}
