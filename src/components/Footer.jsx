import { useContext, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import arrow from "../assets/arrow.png";
import qr from "../assets/qr.png";
import googlePlay from "../assets/googlePlay.png";
import appstore from "../assets/appstore.png";
import face from "../assets/face.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import { DataContext } from "../DataContext";
export function Footer() {
  const [email, setEmail] = useState("");
  const { language } = useContext(DataContext);
  const [year, setYear] = useState(new Date().getFullYear());
  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    console.log("Subscribed:", email);
    setEmail("");
  };
  useEffect(() => {
    setYear(new Date().getFullYear()); // This will keep the year updated on mount
  }, []);

  const toArabicNumbers = (str) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
  };
  return (
    <div className="max-w-[1400px] w-full lg:h-[420px] bg-black">
      <div className=" grid place-items-center place-content-center md:place-items-start md:grid-cols-3 md:gap-x-20 gap-4 lg:grid-cols-5 lg:gap-12 px-8 ">
        <div className="flex flex-col md:items-start items-center text-white ">
          <p className="font-inter font-bold md:text-2xl text-xl md:mb-6 mb-4 mt-8">
            {language === "ar" ? "حصري" : "Exclusive"}
          </p>
          <p className="font-medium text-xl md:mb-6 mb-4">
            {language === "ar" ? "اشترك" : "Subscribe"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar"
              ? "احصل على 10% على طلبك الاول"
              : "Get 10% off your first order"}
          </p>
          <div className="w-full max-w-[250px] relative">
            <input
              type="email"
              placeholder={
                language === "ar"
                  ? " ادخل بريدك الالكتروني"
                  : "Enter your email"
              }
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.5px] border-white bg-transparent text-white placeholder:text-white/80 w-[217px] placeholder:text-base placeholder:font-normal px-4 py-3 rounded-md max-w-[250px] focus:outline-none"
            />
            <button>
              <img
                src={arrow}
                alt="arrow"
                className={`absolute top-3 cursor-pointer ${
                  language === "ar"
                    ? "left-4 sm:left-4 lg:left-4 rotate-180"
                    : "right-4 sm:right-4 lg:right-4"
                }`}
                onClick={handleSubscribe}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:items-start items-center text-white ">
          <p className="font-inter font-meduim md:text-xl text-xl md:mb-6 mb-4  mt-8">
            {language === "ar" ? "الدعم" : "Support"}
          </p>
          <p className="font-normal text-base text-center md:text-start md:mb-6 mb-4">
            {language === "ar"
              ? toArabicNumbers("بنجلاو سراني 111، داكا، دي 1515، بنغلادش")
              : "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            exclusive@gmail.com
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            +88015-88888-9999
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center text-white ">
          <p className="font-inter font-meduim md:text-xl text-xl md:mb-6 mb-4  mt-8">
            {language === "ar" ? "الحساب" : "Account"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "حسابي" : "My Account"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "تسجيل الدخول / التسجيل" : "Login / Register"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "السلة" : "Cart"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "المفضلة" : "Wishlist"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "المتجر" : "Shop"}
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center text-white ">
          <p className="font-inter font-meduim md:text-xl text-xl md:mb-6 mb-4  mt-8">
            {language === "ar" ? "رابط سريع" : "Quick Link"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "شروط الاستخدام" : "Terms Of Use"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "الاسئلة الشائعة" : "FAQ"}
          </p>
          <p className="font-normal text-base md:mb-6 mb-4">
            {language === "ar" ? "اتصل بنا" : "Contact"}
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center text-white">
          <p className="font-inter font-bold md:text-2xl text-xl md:mb-6 mb-4  mt-8">
            {language === "ar" ? "تنزيل التطبيق" : "Download App"}
          </p>
          <p className="font-normal text-xs mb-3 text-white/80">
            {language === "ar"
              ? toArabicNumbers("وفر $3 مع المستخدم جديد فقط")
              : "Save $3 with App New User Only"}
          </p>
          <div className="flex items-start w-[198px] h-[84px] gap-3 text-white md:mb-6 mb-4">
            <img src={qr} alt="qrCode" className="w-[80px] h-[80px]" />
            <div className="flex flex-col w-[110px] h-[84px] gap-4">
              <img
                src={googlePlay}
                alt="googlePlay"
                className="w-[104px] h-[30px]"
              />
              <img
                src={appstore}
                alt="appstore"
                className="w-[104px] h-[34px]"
              />
            </div>
          </div>
          <div className="flex text-white md:mb-6 mb-4 gap-8 items-center w-[168px] h-[24px] cursor-pointer">
            <img src={face} alt="facebook" className="w-[11px] h-[18px]" />
            <img src={twitter} alt="facebook" className="w-[20px] h-[17px]" />
            <FaInstagram className="w-[24px] h-[25px]" />
            <img src={linkedin} alt="facebook" className="w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
      <div className="py-8 max-w-[1400px] w-full h-[40px] border-t border-white/10 mt-6 text-base font-normal flex items-center justify-center">
        <p className="text-white/40 text-base font-normal">
          {language === "ar"
            ? toArabicNumbers(`جميع الحقوق محفوظة © ${year}`)
            : `Copyright Rimel © ${year}. All right reserved `}
        </p>
      </div>
    </div>
  );
}
