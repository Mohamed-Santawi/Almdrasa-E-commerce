import { Container } from "../components/Container";
import { Header } from "../components/Header";
import register from "../assets/register.png";
import { Footer } from "../components";
import iconGoogle from "../assets/Icon-Google.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataContext";
function SignUp() {
  const { language } = useContext(DataContext);
  return (
    <div>
      <Header isRegister={true} />
      <Container>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-3 mb-20">
          <img
            src={register}
            alt="register"
            className="lg:w-[605px] w-full lg:h-[680px] rounded-[4px] mb-8 lg:mb-0"
          />
          <div className="flex flex-col">
            <div className="w-full lg:w-[339px] lg:h-[78px] gap-[24px] mb-2">
              <h1 className="lg:text-4xl font-medium text-2xl font-inter mb-2">
                {language === "ar" ? "انشاء حساب" : " Create an account"}
              </h1>
              <p className="lg:text-base text-sm font-normal">
                {language === "ar"
                  ? " أدخل التفاصيل أدناه"
                  : "  Enter your details below"}
              </p>
            </div>
            <form className="flex flex-col gap-[40px] lg:w-[371px] md:h-[370px] h-[330px] mt-4">
              <input
                type="text"
                placeholder={language === "ar" ? "اسم الشخص" : "First Name"}
                className="lg:text-base text-sm border-b border-[rgba(0,0,0,0.3)]"
              />
              <input
                type="email"
                placeholder={
                  language === "ar"
                    ? "البريد الالكتروني أو رقم الهاتف "
                    : "Email or Phone number"
                }
                className="lg:text-base text-sm border-b border-[rgba(0,0,0,0.3)]"
              />
              <input
                type="password"
                placeholder={language === "ar" ? "كلمة المرور" : "Password"}
                className="lg:text-base text-sm border-b border-[rgba(0,0,0,0.3)]"
              />
              <button className="bg-Button text-white md:py-4 md:px-[50px] py-2 px-16 rounded-[4px] md:w-[370px] md:text-base text-sm font-medium flex items-center justify-center mx-auto">
                {language === "ar" ? "انشاء حساب" : "Create an account"}
              </button>
              <button className="border border-[rgba(0,0,0,0.3)] md:py-4 md:px-[50px] py-2 px-8 rounded-[4px] md:w-[370px] md:text-base text-sm font-normal flex items-center justify-center mx-auto">
                <img src={iconGoogle} className="w-[24px] h-[24px] mx-4" />
                {language === "ar"
                  ? "تسجيل الدخول باستخدام جوجل"
                  : "Sign up with Google"}
              </button>
            </form>
            <div className="flex gap-3 text-gray-700">
              <p className="lg:text-base text-sm font-normal ">
                {language === "ar"
                  ? "لديك حساب بالفعل؟"
                  : "Already have an account?"}
              </p>
              <Link
                to="/login"
                className="font-medium border-b border-b-gray-400"
              >
                {language === "ar" ? "تسجيل الدخول" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default SignUp;
