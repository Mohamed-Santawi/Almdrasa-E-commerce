/* eslint-disable react/prop-types */
import { useContext, useEffect, useMemo, useState } from "react";
import { Button, DropdownMenu } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SearchInput } from "./SearchInput";
import heart from "@assets/heart.png";
import cart from "@assets/cart.png";
import clsx from "clsx";
import { DataContext } from "../DataContext";
import { Link, useLocation } from "react-router-dom";
import { CustomDropdown } from "./CustomDropdown";

export function Header({ isRegister = false }) {
  const { language, handleLanguageChange } = useContext(DataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const location = useLocation();

  const navItems = useMemo(
    () => [
      {
        name: "Home",
        path: "/",
        arPath: "/ar",
        labelEn: "Home",
        labelAr: "الرئيسية",
      },
      {
        name: "Contact",
        path: "/contact",
        arPath: "/ar/contact",
        labelEn: "Contact",
        labelAr: "اتصل بنا",
      },
      {
        name: "About",
        path: "/about",
        arPath: "/ar/about",
        labelEn: "About",
        labelAr: "معلومات عنا",
      },
      {
        name: "Register",
        labelEn: "Register",
        labelAr: "سجل الآن",
        dropdown: true, // Specify this is a dropdown
        options: [
          {
            name: "Sign Up",
            path: "/signup",
            labelEn: "Sign Up",
            labelAr: "إنشاء حساب",
          },
          {
            name: "Login",
            path: "/login",
            labelEn: "Login",
            labelAr: "تسجيل الدخول",
          },
        ],
      },
    ],
    []
  );
  useEffect(() => {
    let currentNav = navItems.find((item) => item.path === location.pathname);

    if (!currentNav) {
      // Check if any dropdown options match the location pathname
      const dropdownItem = navItems.find(
        (item) =>
          item.dropdown &&
          item.options.some((option) => option.path === location.pathname)
      );
      if (dropdownItem) {
        currentNav = dropdownItem; // Set Register as active if any of its options are active
      }
    }

    if (currentNav) {
      setActiveNav(currentNav.name);
    }
  }, [location.pathname, navItems]);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="flex bg-black h-[48px] text-white items-center text-[11px]">
        <div className="flex items-center md:text-sm justify-center text-center w-full">
          <p className="w-full text-center break-words leading-normal md:leading-relaxed text-[11px] lg:text-base md:text-sm">
            {language === "en"
              ? "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
              : "تخفيضات الصيف على جميع ملابس السباحة وتوصيل سريع مجاني - خصم 50٪!"}
            <span className="inline-block mt-1 px-2 md:text-sm">
              <a
                href="/shop-now"
                className="underline font-semibold text-[11px] md:text-sm"
              >
                {language === "en" ? "Shop Now" : "تسوق الآن"}
              </a>
            </span>
          </p>
        </div>
        {/* Language Dropdown */}
        <div className="lg:absolute lg:right-[150px]">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                variant="soft"
                className="!text-white !cursor-pointer focus:outline-none !text-[11px] md:!text-base !bg-transparent !border-none md:!px-6"
              >
                {language === "en" ? "English" : "العربية"}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={() => handleLanguageChange("en")}>
                English
              </DropdownMenu.Item>
              <DropdownMenu.Item onClick={() => handleLanguageChange("ar")}>
                العربية
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      {/* Main Header */}
      <div className="md:mx-auto lg:h-[70px] h-[50px] grid grid-cols-[repeat(3,minmax(0,_auto))] border-b-[0.5px] items-center justify-around lg:px-20 md:pl-16 lg:max-w-[1400px]">
        <h1
          className={`lg:text-2xl md:text-base text-[13px] font-semibold lg:pl-2 ${
            language === "ar" ? "text-right" : "text-left"
          }`}
        >
          {language === "en" ? "Exclusive" : "حصري"}
        </h1>

        {/* Navigation Menu */}
        <nav className="relative hidden lg:flex md:flex list-none flex-row gap-3 lg:gap-8 md:gap-1 text-[11px] md:text-sm lg:text-base">
          {navItems.map((item) =>
            item.dropdown ? (
              <CustomDropdown
                key={item.name}
                triggerText={language === "en" ? item.labelEn : item.labelAr}
                isActive={activeNav === "Register"} // Pass active state
              >
                {item.options.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block p-2 transition duration-300 ease-in-out hover:text-[#F58A7B]"
                  >
                    {language === "en" ? option.labelEn : option.labelAr}
                  </Link>
                ))}
              </CustomDropdown>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "py-2 px-4 lg:py-0 lg:px-0 lg:border-none cursor-pointer transition",
                  {
                    "underline font-semibold text-Button":
                      activeNav === item.name,
                    "hover:text-[#F58A7B]": activeNav !== item.name,
                  }
                )}
              >
                {language === "en" ? item.labelEn : item.labelAr}
              </Link>
            )
          )}
        </nav>

        {/* Search and Cart icons */}
        <div className="flex gap-2 lg:gap-16 md:gap-4">
          <SearchInput
            onSearchChange={(value) => console.log(value)}
            language={language}
          />
          {!isRegister && (
            <div className="flex lg:gap-4 gap-3 items-center justify-center pl-2">
              <img
                src={heart}
                alt="Favourite image"
                className="w-[17px] h-[17px] lg:w-[22px] lg:h-[22px] md:w-[17px] md:h-[17px]"
              />
              <img
                src={cart}
                alt="Cart image"
                className="w-[17px] h-[17px] lg:w-[25px] lg:h-[25px] md:w-[17px] md:h-[17px]"
              />
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center justify-end !text-black">
          <button
            className="text-lg focus:outline-none focus:text-black hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden flex flex-row gap-2 list-none w-full bg-white z-10 border-b-[0.5px] text-[11px] items-center justify-center ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) =>
          item.dropdown ? (
            <CustomDropdown
              key={item.name}
              triggerText={language === "en" ? item.labelEn : item.labelAr}
              isActive={activeNav === "Register"}
            >
              {item.options.map((option) => (
                <Link
                  key={option.name}
                  to={option.path}
                  className="block p-2 transition duration-300 ease-in-out hover:text-[#F58A7B]"
                >
                  {language === "en" ? option.labelEn : option.labelAr}
                </Link>
              ))}
            </CustomDropdown>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              className={clsx("py-2 px-4 cursor-pointer", {
                "underline font-semibold text-[12px] text-Button":
                  activeNav === item.name,
                "hover:text-[#F58A7B]": activeNav !== item.name,
              })}
              onClick={() => setActiveNav(item.name)}
            >
              {language === "en" ? item.labelEn : item.labelAr}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
