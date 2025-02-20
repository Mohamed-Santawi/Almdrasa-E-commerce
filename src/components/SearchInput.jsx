import { useEffect, useState } from "react";
import clsx from "clsx";
/* eslint-disable react/prop-types */
export function SearchInput(props) {
  const { onSearchChange, language = "en" } = props;
  const [placeholderText, setPlaceholderText] = useState(
    language === "en" ? "What are you looking for?" : "ما الذي تبحث عنه؟"
  );
  const onSearchChangeHandler = (e) => {
    onSearchChange(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setPlaceholderText(
        language === "en"
          ? window.innerWidth < 1024 && window.innerWidth > 640
            ? "Search for items"
            : "What are you looking for?"
          : window.innerWidth < 1024 && window.innerWidth > 640
          ? "ابحث عن عناصر"
          : "ما الذي تبحث عنه؟"
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger once to set the initial placeholder
    return () => window.removeEventListener("resize", handleResize);
  }, [language]);
  return (
    <form
      className={`relative bg-white lg:w-[210px] lg:h-[34px] md:w-[170px] md:h-[34px] w-[155px] h-[30px] ${
        language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div
        className={clsx(
          "absolute top-1/2 -translate-y-1/2",
          language === "ar"
            ? "lg:left-2 left-1.5"
            : "lg:-right-1 md:right-3 right-1.5"
        )}
      >
        <svg
          className="w-2.5 h-2.5 lg:w-[18px] lg:h-[18px] md:w-[14px] md:h-[14px]"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M10.5718 10.5716L14.0002 14"
            stroke="#000000"
            strokeWidth="1.5"
            strokeMiterlimit="10 "
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        placeholder={placeholderText}
        className={`bg-[#F5F5F5] md:text-sm text-[10px] font-normal rounded-[7px] max-w-md md:pl-3 pl-2 shadow focus:outline-none lg:w-[230px] lg:h-[34px] w-[155px] h-[30px] md:w-[170px] md:h-[34px]  ${
          language === "ar" ? "text-right pr-2 lg:pr-3" : "text-left"
        }`}
        onChange={onSearchChangeHandler}
      />
    </form>
  );
}
