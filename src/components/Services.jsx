import { Container } from "./Container";
import { LuBus } from "react-icons/lu";
import { CiHeadphones } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import IconCircle from "./IconCircle";
import { useContext } from "react";
import { DataContext } from "../DataContext";
export function Services() {
  const { language } = useContext(DataContext);
  const toArabicNumbers = (str) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
  };
  return (
    <Container>
      <div className="flex lg:flex-row flex-col lg:gap-[90px] gap-[30px] items-center justify-center mb-20">
        <IconCircle
          icon={LuBus}
          firstContent={
            language === "ar" ? "توصيل سريع" : " FREE AND FAST DELIVERY"
          }
          secondContent={
            language === "ar"
              ? toArabicNumbers(" توصيل سريع لجميع الطلبات أكثر من $140")
              : "Free delivery for all orders over $140"
          }
          firstFontSize="20px"
          firstFontWeight="semibold"
          secondFontSize="14px"
          secondFontWeight="normal"
          useHoverEffect={false}
        />
        <IconCircle
          icon={CiHeadphones}
          firstContent={
            language === "ar"
              ? "خدمة العملاء 24 ساعة خلال الاسبوع"
              : "24/7 CUSTOMER SERVICE"
          }
          secondContent={
            language === "ar"
              ? "خدمة عملاء حميمة 24 ساعة خلال الاسبوع"
              : "Friendly 24/7 customer support"
          }
          firstFontSize="20px"
          firstFontWeight="semibold"
          secondFontSize="14px"
          secondFontWeight="normal"
          useHoverEffect={false}
        />
        <IconCircle
          icon={VscWorkspaceTrusted}
          firstContent={
            language === "ar" ? "ضمان المال" : "MONEY BACK GUARANTEE"
          }
          secondContent={
            language === "ar"
              ? "استرجاع المال خلال 30 يوم"
              : "We reurn money within 30 days"
          }
          firstFontSize="20px"
          firstFontWeight="semibold"
          secondFontSize="14px"
          secondFontWeight="normal"
          useHoverEffect={false}
        />
      </div>
    </Container>
  );
}
