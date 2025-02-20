// /* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

// const IconCircle = ({
//   icon: Icon,
//   firstContent,
//   secondContent,
//   firstFontSize,
//   firstFontWeight,
//   secondFontSize,
//   secondFontWeight,
// }) => {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="w-[80px] h-[80px] rounded-full bg-[#2F2E30] bg-opacity-30 flex items-center justify-center">
//         <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
//           <Icon className="w-[35px] h-[40px] text-white" />
//         </div>
//       </div>
//       <div className="w-[270px] mx-auto text-center">
//         <p
//           className={`w-full mt-4 text-[${firstFontSize}]  font-[${firstFontWeight}]`}
//         >
//           {firstContent}
//         </p>
//         <p
//           className={`w-full mt-2 text-${secondFontSize} leading-[21px] font-${secondFontWeight}`}
//         >
//           {secondContent}
//         </p>
//       </div>
//     </div>
//   );
// };

// IconCircle.propTypes = {
//   icon: PropTypes.elementType.isRequired, // Ensures the icon is a valid React component
// };

// export default IconCircle;

// import PropTypes from "prop-types";
// import { useState } from "react";
// import clsx from "clsx";

// const IconCircle = ({
//   icon: Icon,
//   firstContent,
//   secondContent,
//   firstFontSize,
//   firstFontWeight,
//   secondFontSize,
//   secondFontWeight,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <div
//       className="flex flex-col items-center justify-center"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={clsx(
//           "w-[80px] h-[80px] rounded-full bg-[#2F2E30] bg-opacity-30 flex items-center justify-center",
//           isHovered ? "bg-white" : "bg-[#2F2E30] bg-opacity-30"
//         )}
//       >
//         <div
//           className={clsx(
//             "w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center transition-colors duration-200",
//             isHovered ? "bg-white" : "bg-black"
//           )}
//         >
//           <Icon
//             className={clsx(
//               "w-[35px] h-[40px] transition-colors duration-200",
//               isHovered ? "text-black" : "text-white"
//             )}
//           />
//         </div>
//       </div>
//       <div className="w-[270px] mx-auto text-center">
//         <p
//           className={clsx(
//             "w-full mt-4 transition-colors duration-200",
//             isHovered ? "text-white" : "text-black"
//           )}
//           style={{ fontSize: firstFontSize, fontWeight: firstFontWeight }}
//         >
//           {firstContent}
//         </p>
//         <p
//           className={clsx(
//             "w-full mt-2 leading-[21px] transition-colors duration-200",
//             isHovered ? "text-white" : "text-black"
//           )}
//           style={{ fontSize: secondFontSize, fontWeight: secondFontWeight }}
//         >
//           {secondContent}
//         </p>
//       </div>
//     </div>
//   );
// };

// IconCircle.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   firstContent: PropTypes.string.isRequired,
//   secondContent: PropTypes.string.isRequired,
//   firstFontSize: PropTypes.string.isRequired,
//   firstFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//     .isRequired,
//   secondFontSize: PropTypes.string.isRequired,
//   secondFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//     .isRequired,
//   isHover: PropTypes.bool,
// };

// export default IconCircle;

import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";

const IconCircle = ({
  icon: Icon,
  firstContent,
  secondContent,
  firstFontSize,
  firstFontWeight,
  secondFontSize,
  secondFontWeight,
  useHoverEffect = true, // Default value is true
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Conditional logic for hover effect
  const hoverProps = useHoverEffect
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }
    : {};

  return (
    <div
      className="flex flex-col items-center justify-center"
      {...hoverProps} // Apply hover props only if `useHoverEffect` is true
    >
      <div
        className={clsx(
          "w-[80px] h-[80px] rounded-full bg-[#2F2E30] bg-opacity-30 flex items-center justify-center",
          isHovered && useHoverEffect
            ? "bg-white"
            : "bg-[#2F2E30] bg-opacity-30"
        )}
      >
        <div
          className={clsx(
            "w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center transition-colors duration-200",
            isHovered && useHoverEffect ? "bg-white" : "bg-black"
          )}
        >
          <Icon
            className={clsx(
              "w-[35px] h-[40px] transition-colors duration-200",
              isHovered && useHoverEffect ? "text-black" : "text-white"
            )}
          />
        </div>
      </div>
      <div className="w-[270px] mx-auto text-center">
        <p
          className={clsx(
            "w-full mt-4 transition-colors duration-200",
            isHovered && useHoverEffect ? "text-white" : "text-black"
          )}
          style={{ fontSize: firstFontSize, fontWeight: firstFontWeight }}
        >
          {firstContent}
        </p>
        <p
          className={clsx(
            "w-full mt-2 leading-[21px] transition-colors duration-200",
            isHovered && useHoverEffect ? "text-white" : "text-black"
          )}
          style={{ fontSize: secondFontSize, fontWeight: secondFontWeight }}
        >
          {secondContent}
        </p>
      </div>
    </div>
  );
};

IconCircle.propTypes = {
  icon: PropTypes.elementType.isRequired,
  firstContent: PropTypes.string.isRequired,
  secondContent: PropTypes.string.isRequired,
  firstFontSize: PropTypes.string.isRequired,
  firstFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  secondFontSize: PropTypes.string.isRequired,
  secondFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  useHoverEffect: PropTypes.bool, // New prop to control hover effect
};

export default IconCircle;
