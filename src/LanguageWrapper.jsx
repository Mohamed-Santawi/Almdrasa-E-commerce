/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "./DataContext";

export function LanguageWrapper({ children }) {
  const { language } = useContext(DataContext);

  return (
    <div
      className={
        language === "ar"
          ? "font-noto-arabic text-right"
          : "font-sans text-left"
      }
    >
      {children}
    </div>
  );
}

export default LanguageWrapper;
