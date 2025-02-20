import { useContext } from "react";
import { DataContext } from "../DataContext";

/* eslint-disable react/prop-types */
export function CategoriesCard({ category }) {
  const { name, image, nameAr } = category;
  const { language } = useContext(DataContext);

  return (
    <div
      className="flex flex-col w-[150px] h-[125px] border border-[rgba(0,0,0,0.3)] rounded-[4px] items-center justify-center transition-all duration-300
      bg-white text-black hover:bg-Button hover:text-white cursor-pointer"
    >
      <img src={image} alt={name} className="w-[45px] h-[45px] mb-2" />
      <p className="lg:text-base text-sm text-center">
        {language === "ar" ? nameAr : name}
      </p>
    </div>
  );
}
