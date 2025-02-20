/* eslint-disable no-unused-vars */
import joy from "./assets/joy.png";
import joy1 from "./assets/joy1.png";
import key from "./assets/keyboard.png";
import lcd from "./assets/lcd.png";
import chair from "./assets/chair.png";
import jacket from "./assets/jacket.png";
import lap from "./assets/lap.png";
import bag from "./assets/bag.png";
import sound from "./assets/sound.png";
import coat from "./assets/coat.png";
import lib from "./assets/lib.png";
import ceaser from "./assets/ceaser.png";
const toArabicNumbers = (str) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
};
const bestSellingProducts = [
  {
    id: 1,
    name: "The north coat",
    nameAr: "معطف الشمال",
    currentPrice: 260,
    currentPriceAr: toArabicNumbers("260"),
    previousPrice: 360,
    previousPriceAr: toArabicNumbers("360"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 5,
    rating: 65,
    ratingAr: toArabicNumbers("65"),
    image: coat,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    nameAr: "حقيبة غوتشي الرياضية",
    currentPrice: 960,
    currentPriceAr: toArabicNumbers("960"),
    previousPrice: 1160,
    previousPriceAr: toArabicNumbers("1160"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 4,
    rating: 90,
    ratingAr: toArabicNumbers("90"),
    image: bag,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    nameAr: "مبرد CPU سائل RGB",
    currentPrice: 1160,
    currentPriceAr: toArabicNumbers("1160"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 4,
    rating: 90,
    ratingAr: toArabicNumbers("90"),
    image: sound,
  },
  {
    id: 4,
    name: "Small BookSelf",
    nameAr: "رف الكتب الصغير",
    currentPrice: 360,
    currentPriceAr: toArabicNumbers("360"),
    previousPrice: 460,
    previousPriceAr: toArabicNumbers("460"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 5,
    rating: 65,
    ratingAr: toArabicNumbers("65"),
    image: lib,
  },
];

export default bestSellingProducts;
