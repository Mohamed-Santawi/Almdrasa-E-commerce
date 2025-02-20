import { Theme } from "@radix-ui/themes";
import { Header } from "@components/Header";
import { SideMenu } from "@components/SideMenu";
import { useContext } from "react";
import { DataContext } from "../DataContext";
import { SlideShow } from "@components/SlideShow";
import {
  BestSelling,
  Features,
  Footer,
  OurProducts,
  SaleCounter,
  Services,
} from "../components";
import { Categories } from "@components/Categories";
import { JBLPoster } from "../components/JBLPoster";
import { LanguageWrapper } from "../LanguageWrapper"; // Import the LanguageWrapper
import ScrollToTopButton from "../components/ScrollToTopButton ";

function Home() {
  const { productsslides } = useContext(DataContext);
  return (
    <Theme>
      <LanguageWrapper>
        <Header />
        <>
          <div className="flex">
            <SideMenu />
            <div className="lg:w-[760px] md:w-[70%] w-full m-auto lg:mt-4 mt-2 px-2">
              <SlideShow
                slides={productsslides}
                autoSlide={true}
                autoSlideInterval={5000}
              />
            </div>
          </div>
          <SaleCounter />
          <Categories />
          <BestSelling />
          <JBLPoster />
          <OurProducts />
          <Features />
          <Services />
          <ScrollToTopButton />
          <Footer />
        </>
      </LanguageWrapper>
    </Theme>
  );
}

export default Home;
