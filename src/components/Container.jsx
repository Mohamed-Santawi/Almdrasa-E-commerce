/* eslint-disable react/prop-types */
import clsx from "clsx";
const lgPaddingMap = {
  0: "lg:px-0",
  4: "lg:px-4",
  6: "lg:px-6",
  8: "lg:px-8",
  10: "lg:px-10",
  12: "lg:px-12",
  16: "lg:px-16",
  20: "lg:px-20",
  24: "lg:px-24",
  28: "lg:px-28",
  32: "lg:px-32",
  36: "lg:px-36",
  40: "lg:px-40",
  44: "lg:px-44",
};
const lgMaxWidthMap = {
  def: "1300",
  feature: "1400",
};

export function Container({ children, lgPx = "28", lgMaxWidt = "1300" }) {
  return (
    <div
      className={clsx(
        `flex-col items-center mx-auto w-full max-w-${lgMaxWidthMap[lgMaxWidt]} mt-10 lg:mt-20 md:px-20 px-2`,
        lgPaddingMap[lgPx] // Dynamically apply Tailwind padding class
      )}
    >
      {children}
    </div>
  );
}
