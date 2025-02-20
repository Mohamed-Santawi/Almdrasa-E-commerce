import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import ps from "../assets/ps.png";
import amazon from "../assets/amazon.png";
import perfum from "../assets/perfum.png";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
export function Features() {
  const { language } = useContext(DataContext);
  const [backgroundSize, setBackgroundSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setBackgroundSize(
        window.innerWidth < 640 ? "360px 420px" : "511px 511px"
      );
    };

    // Call initially
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container>
      <SectionTitle title={"Featured"} content={"New Arrival"} />
      <div className="w-full lg:px-10 md:px-10 mt-8 flex lg:flex-row flex-col gap-[30px]">
        <div
          className=" px-4 w-full md:w-[510px] md:h-[600px] h-[450px] bg-cover bg-center flex bg-black rounded-[4px]"
          style={{
            backgroundImage: `url(${ps})`,
            backgroundOrigin: "content-box",
            padding: "20px",
            backgroundRepeat: "no-repeat",
            backgroundSize,
          }}
        >
          <div className="w-[242px] bg-opacity-50 p-4 flex flex-col items-end justify-end ">
            <h5 className="lg:text-2xl text-lg font-semibold font-inter mb-2 w-full text-white">
              {language === "ar" ? "بلايستيشن 5" : "Playstation 5"}
            </h5>
            <p className="text-[14px] font-normal leading-[24px] text-[#FAFAFA] mb-2">
              {language === "ar"
                ? "إصدار أبيض و أسود من بلايستيشن 5 سيصدر للبيع."
                : "Black and White version of the PS5 coming out on sale."}
            </p>
            <a className="text-white w-full flex items-start relative lg:text-base text-sm">
              {language === "ar" ? "تسوق الآن" : "Shop Now"}
              <span
                className={`absolute -bottom-[5px] transform -translate-x-1/2 w-[81px] border-b border-white ${
                  language === "ar" ? "-right-[50px]" : "left-[40px]"
                }`}
              ></span>
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[30px] md:w-[510px] md:h-[600px]">
            <div className="bg-black md:w-[510px] w-full h-[284px] px-4 rounded-[4px]">
              <div className="w-[280px] flex flex-col px-4 justify-end items-end h-full">
                <h5 className="lg:text-2xl text-lg font-semibold font-inter mb-2 w-full text-white">
                  {language === "ar"
                    ? "مجموعات نسائية"
                    : "Women’s Collections"}
                </h5>
                <p className="text-[14px] font-normal leading-[24px] text-[#FAFAFA] mb-2">
                  {language === "ar"
                    ? "صورة مميزة للمجموعات النسائية التي تعطيك نموذج اخر."
                    : "Featured woman collections that give you another vibe."}
                </p>
                <a className="text-white w-full flex items-start relative lg:text-base text-sm mb-8">
                  {language === "ar" ? "تسوق الآن" : "Shop Now"}
                  <span
                    className={`absolute -bottom-[5px] transform -translate-x-1/2 w-[81px] border-b border-white ${
                      language === "ar" ? "-right-[50px]" : "left-[40px]"
                    }`}
                  ></span>
                </a>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[30px] md:w-[510px] md:h-[284px]">
              <div
                className="bg-black rounded-[4px] md:w-[270px] h-[284px] bg-cover bg-center flex"
                style={{
                  backgroundImage: `url(${amazon})`,
                  backgroundOrigin: "content-box",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "190px 221px",
                }}
              >
                <div className="w-[242px] bg-opacity-50 p-4 flex flex-col items-start justify-end">
                  <h5 className="lg:text-2xl text-lg font-semibold font-inter mb-2 w-full text-white">
                    {language === "ar" ? "مكبرات الصوت" : "Speakers"}
                  </h5>
                  <p className="text-[14px] font-normal leading-[24px] text-[#FAFAFA] mb-2">
                    {language === "ar"
                      ? "مكبرات الصوت الذكية من شركة امازون"
                      : "Amazon wireless speakers"}
                  </p>
                  <a className="text-white w-full flex items-start relative lg:text-base text-sm">
                    {language === "ar" ? "تسوق الآن" : "Shop Now"}
                    <span
                      className={`absolute -bottom-[5px] transform -translate-x-1/2 w-[81px] border-b border-white ${
                        language === "ar" ? "-right-[50px]" : "left-[40px]"
                      }`}
                    ></span>
                  </a>
                </div>
              </div>
              <div
                className="bg-black rounded-[4px] md:w-[270px] h-[284px] bg-cover bg-center flex"
                style={{
                  backgroundImage: `url(${perfum})`,
                  backgroundOrigin: "content-box",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "190px 221px",
                }}
              >
                <div className="w-[242px] bg-opacity-50 p-4 flex flex-col items-start justify-end">
                  <h5 className="lg:text-2xl text-lg font-semibold font-inter mb-2 w-full text-white">
                    {language === "ar" ? " عطر" : "Perfume"}
                  </h5>
                  <p className="text-[14px] font-normal leading-[24px] text-[#FAFAFA] mb-2">
                    {language === "ar"
                      ? "عطر جوكي موديل 2022 من شركة جوكي"
                      : "GUCCI INTENSE OUD EDP"}
                  </p>
                  <a className="text-white w-full flex items-start relative lg:text-base text-sm">
                    {language === "ar" ? "تسوق الآن" : "Shop Now"}
                    <span
                      className={`absolute -bottom-[5px] transform -translate-x-1/2 w-[81px] border-b border-white ${
                        language === "ar" ? "-right-[50px]" : "left-[40px]"
                      }`}
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
