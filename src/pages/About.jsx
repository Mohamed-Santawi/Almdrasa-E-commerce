import { Container, Footer, Header } from "../components";
import ourStory from "../assets/ourStory.jpg";
import IconCircle from "../components/IconCircle";
import { FaSackDollar } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import clsx from "clsx";
import { useContext, useState } from "react";
import { DataContext } from "../DataContext";

function About() {
  const { language } = useContext(DataContext);
  const toArabicNumbers = (str) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
  };
  const stats = [
    {
      icon: BsShop,
      firstContent: language === "ar" ? toArabicNumbers("10.5K") : "10.5K",
      secondContent:
        language === "ar"
          ? "البائعون النشطون على موقعنا"
          : "Sellers active on our site",
    },
    {
      icon: CiDollar,
      firstContent: language === "ar" ? toArabicNumbers("33K") : "33K",
      secondContent:
        language === "ar"
          ? "المبيعات الشهرية للمنتجات"
          : "Monthly Product Sale",
    },
    {
      icon: GiShoppingBag,
      firstContent: language === "ar" ? toArabicNumbers("45.5K") : "45.5K",
      secondContent:
        language === "ar"
          ? "العملاء النشطون على موقعنا"
          : "Customers active on our site",
    },
    {
      icon: FaSackDollar,
      firstContent: language === "ar" ? toArabicNumbers("25K") : "25K",
      secondContent:
        language === "ar"
          ? "إجمالي المبيعات السنوية على موقعنا"
          : "Annual gross sale on our site",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <Header />
      <Container lgPx="36">
        <div className="flex flex-col lg:flex-row lg:mb-20 mb-3 ">
          <div className="flex flex-col w-full lg:w-[525px] lg:h-[536px] items-start justify-center px-4">
            <h1 className="font-inter font-semibold lg:text-[54px] text-3xl lg:leading-[64px] mb-6 tracking-wider">
              {language === "ar" ? "قصتنا" : "Our Story"}
            </h1>
            <p className="text-sm lg:text-base mb-5">
              {language === "ar"
                ? "تم إطلاق Exclusive في عام 2015، وهو السوق الإلكتروني الرائد في جنوب آسيا مع وجود نشط في بنغلاديش. بدعم من مجموعة واسعة من حلول التسويق والبيانات والخدمات المصممة خصيصًا، يضم Exclusive أكثر من 10,500 بائع و300 علامة تجارية، ويخدم 3 ملايين عميل في جميع أنحاء المنطقة."
                : "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region."}
            </p>
            <p className="text-sm lg:text-base">
              {language === "ar"
                ? "يقدم Exclusive أكثر من مليون منتج وهو في نمو مستمر. يوفر مجموعة متنوعة من الفئات التي تشمل السلع الاستهلاكية."
                : "Exclusive has more than 1 million products to offer and is growing rapidly. It provides a diverse assortment of categories ranging from consumer goods."}
            </p>
          </div>
          <img
            src={ourStory}
            alt="Our Story"
            className="lg:w-[700px] lg:h-[609px] w-full rounded-[4px] lg:-mt-20 lg:order-first order-last"
          />
        </div>

        <div className="flex flex-row items-center justify-center lg:items-start lg:justify-start mb-24 w-full lg:w-[1170px] lg:h-[230px] gap-10 flex-wrap">
          {stats.map(({ icon, firstContent, secondContent }, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={clsx(
                "w-[250px] h-[230px] border border-[rgba(0,0,0,0.3)] rounded-[4px] flex items-center justify-center",
                hoverIndex === index ? "bg-Button" : "bg-white"
              )}
            >
              <IconCircle
                icon={icon}
                firstContent={firstContent}
                secondContent={secondContent}
                firstFontSize="32px"
                firstFontWeight="bold"
                secondFontSize="15px"
                secondFontWeight="normal"
              />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default About;
