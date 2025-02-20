import { Container, Header } from "../components";
import register from "../assets/register.png";
import { Footer } from "../components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataContext";
function Login() {
  const { language } = useContext(DataContext);
  return (
    <>
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
                {language === "ar" ? "تسجيل الدخول" : "Log in to Exclusive"}
              </h1>
              <p className="lg:text-base text-sm font-normal">
                {language === "ar"
                  ? " أدخل التفاصيل أدناه"
                  : "  Enter your details below"}
              </p>
            </div>
            <form className="flex flex-col gap-[40px] lg:w-[371px] h-[370px] mt-4">
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
              <div className="flex gap-3 items-center justify-center">
                <button className="bg-Button text-white md:py-4 md:px-12 py-2 px-8 rounded-[4px] md:w-[200px]  md:text-base text-sm font-medium md:mb-0 mb-2 flex items-center justify-center mx-auto">
                  {language === "ar" ? "تسجيل الدخول" : "Login"}
                </button>
                <Link to="/login" className="w-[150px] lg:text-base text-sm text-Button">
                  {language === "ar" ? "نسيت كلمة المرور" : "Forget Password?"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
