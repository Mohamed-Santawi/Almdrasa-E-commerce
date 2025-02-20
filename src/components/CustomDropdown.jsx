/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import  { useState } from "react";
// import { Link } from "react-router-dom";

// export const CustomDropdown = ({ language, activeNav, setActiveNav }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className={`${
//           activeNav === "Register"
//             ? "underline font-semibold text-Button"
//             : "hover:text-[#F58A7B] text-[11px] md:text-sm lg:!text-base"
//         } transition px-4 py-2 border-none bg-transparent text-[rgba(0,0,0,0.85)] cursor-pointer font-medium focus:outline-none text-left`}
//       >
//         {language === "en" ? "Register" : "سجل الآن"}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
//           <div className="py-2">
//             <Link
//               to={language === "en" ? "/signup" : "/ar/signup"}
//               onClick={() => {
//                 setActiveNav("Register");
//                 setIsOpen(false);
//               }}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               {language === "en" ? "Sign Up" : "إنشاء حساب"}
//             </Link>
//             <Link
//               to={language === "en" ? "/login" : "/ar/login"}
//               onClick={() => {
//                 setActiveNav("Register");
//                 setIsOpen(false);
//               }}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               {language === "en" ? "Login" : "تسجيل الدخول"}
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// import { useState } from "react";
// import clsx from "clsx";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// export function CustomDropdown({
//   children,
//   triggerText,
//   handleLanguage,
//   handleRegister,
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className={clsx(
//           "cursor-pointer font-medium focus:outline-none text-[11px] md:text-sm lg:text-base bg-transparent border-none md:px-0  transition",
//           {
//             "text-white": handleLanguage, // Corrected the condition here
//             "text-[rgba(0,0,0,0.85)]": handleRegister, // Corrected the condition here
//           }
//         )}
//       >
//         {triggerText}
//         <MdOutlineKeyboardArrowDown className="inline-block ml-2 md:text-2xl text-lg" />
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md border border-gray-300 z-10">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import clsx from "clsx";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// export function CustomDropdown({ children, triggerText }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="cursor-pointer text-[11px] md:text-sm lg:text-base md:pt-2 lg:pt-0"
//       >
//         {triggerText}
//         <MdOutlineKeyboardArrowDown className="inline-block ml-2 md:text-2xl text-lg" />
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 flex flex-col items-center justify-center w-[120px] mt-2 bg-white shadow-lg rounded-md border border-gray-300 z-10">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function CustomDropdown({ children, triggerText, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={clsx(
          "cursor-pointer text-[11px] md:text-sm lg:text-base md:pt-2 lg:pt-0",
          isActive && "underline font-semibold text-Button" // Use prop for active state
        )}
      >
        {triggerText}
        <MdOutlineKeyboardArrowDown className="inline-block ml-2 md:text-2xl text-lg" />
      </button>
      {isOpen && (
        <div className="absolute right-0 flex flex-col items-center justify-center w-[120px] mt-2 bg-white shadow-lg rounded-md border border-gray-300 z-10">

          {children}
        </div>
      )}
    </div>
  );
}
