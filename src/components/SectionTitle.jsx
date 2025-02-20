import { useContext } from "react";
import { DataContext } from "../DataContext";

/* eslint-disable react/prop-types */
export function SectionTitle({ title, content }) {
  const { language } = useContext(DataContext);
  return (
    <div className="flex flex-col items-start w-full lg:items-start gap-2 lg:gap-4 lg:pl-10">
      <div className="flex gap-2 lg:gap-4 items-center">
        <div className="w-5 h-10 lg:w-[20px] lg:h-[40px] bg-Button border-2 border-Button rounded-[4px]"></div>
        <p className="text-sm lg:text-base font-semibold text-Button">
          {language === "ar" ? "العنوان" : title}
        </p>
      </div>
      <p className="text-lg lg:text-4xl font-semibold">
        {language === "ar" ? "محتوى القسم" : content}
      </p>
    </div>
  );
}
