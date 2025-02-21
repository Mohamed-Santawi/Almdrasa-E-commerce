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
import camera from "./assets/camera.png";
import cream from "./assets/cream.png";
import foot from "./assets/foot.png";
import car from "./assets/car.png";

const toArabicNumbers = (str) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
};

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    nameAr: "هافيت HV-G92",
    currentPrice: 120,
    currentPriceAr: toArabicNumbers("120"),
    previousPrice: 160,
    previousPriceAr: toArabicNumbers("160"),
    discount: 40,
    discountAr: toArabicNumbers("40"),
    stars: 5,
    rating: 88,
    image: joy,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    nameAr: "لوحة مفاتيح AK-900 السلكية",
    currentPrice: 960,
    currentPriceAr: toArabicNumbers("960"),
    previousPrice: 1160,
    previousPriceAr: toArabicNumbers("1160"),
    discount: 35,
    discountAr: toArabicNumbers("35"),
    stars: 4,
    rating: 75,
    image: key,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    nameAr: "شاشة IPS LCD للألعاب",
    currentPrice: 370,
    currentPriceAr: toArabicNumbers("370"),
    previousPrice: 400,
    previousPriceAr: toArabicNumbers("400"),
    discount: 30,
    discountAr: toArabicNumbers("30"),
    stars: 5,
    rating: 99,
    image: lcd,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    nameAr: "كرسي S-Series المريح",
    currentPrice: 375,
    currentPriceAr: toArabicNumbers("375"),
    previousPrice: 400,
    previousPriceAr: toArabicNumbers("400"),
    discount: 25,
    discountAr: toArabicNumbers("25"),
    stars: 4.5,
    rating: 99,
    image: chair,
  },
  {
    id: 5,
    name: "Quilted Satin Jacket",
    nameAr: "سترة ساتان مبطنة",
    currentPrice: 450,
    currentPriceAr: toArabicNumbers("450"),
    previousPrice: 750,
    previousPriceAr: toArabicNumbers("750"),
    discount: 25,
    discountAr: toArabicNumbers("25"),
    stars: 5,
    rating: 99,
    image: jacket,
    colors: "#184A48",
  },
  {
    id: 6,
    name: "ASUS FHD Gaming Laptop",
    nameAr: "لابتوب ASUS FHD للألعاب",
    currentPrice: 960,
    currentPriceAr: toArabicNumbers("960"),
    previousPrice: 1160,
    previousPriceAr: toArabicNumbers("1160"),
    discount: 35,
    discountAr: toArabicNumbers("35"),
    stars: 5,
    rating: 99,
    image: lap,
  },
  {
    id: 7,
    name: "Gucci duffle bag",
    nameAr: "حقيبة غوتشي الرياضية",
    currentPrice: 960,
    currentPriceAr: toArabicNumbers("960"),
    previousPrice: 1160,
    previousPriceAr: toArabicNumbers("1160"),
    discount: 35,
    discountAr: toArabicNumbers("35"),
    stars: 4,
    rating: 90,
    image: bag,
  },
  {
    id: 8,
    name: "RGB liquid CPU Cooler",
    nameAr: "مبرد CPU سائل RGB",
    currentPrice: 1160,
    currentPriceAr: toArabicNumbers("1160"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 35,
    discountAr: toArabicNumbers("35"),
    stars: 4,
    rating: 90,
    image: sound,
  },
  {
    id: 9,
    name: "GP11 Shooter USB Gamepad",
    nameAr: "جهاز تحكم GP11 Shooter USB",
    currentPrice: 550,
    currentPriceAr: toArabicNumbers("550"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 4.5,
    rating: 55,
    image: joy1,
    newProduct: "new",
    colors: "#000",
  },
  {
    id: 10,
    name: "The north coat",
    nameAr: "معطف الشمال",
    currentPrice: 260,
    currentPriceAr: toArabicNumbers("260"),
    previousPrice: 360,
    previousPriceAr: toArabicNumbers("360"),
    discount: 10,
    discountAr: toArabicNumbers("10"),
    stars: 5,
    rating: 65,
    image: coat,
  },
  {
    id: 11,
    name: "Small BookSelf",
    nameAr: "رف الكتب الصغير",
    currentPrice: 360,
    currentPriceAr: toArabicNumbers("360"),
    previousPrice: 460,
    previousPriceAr: toArabicNumbers("460"),
    discount: 10,
    discountAr: toArabicNumbers("10"),
    stars: 5,
    rating: 65,
    image: lib,
  },
  {
    id: 12,
    name: "Breed Dry Dog Food",
    nameAr: "طعام الكلاب الجاف Breed",
    currentPrice: 160,
    currentPriceAr: toArabicNumbers("160"),
    previousPrice: 260,
    previousPriceAr: toArabicNumbers("260"),
    discount: 10,
    discountAr: toArabicNumbers("10"),
    stars: 5,
    rating: 65,
    image: ceaser,
  },
  {
    id: 13,
    name: "CANON EOS DSLR Camera",
    nameAr: "كانون EOS DSLR",
    currentPrice: 360,
    currentPriceAr: toArabicNumbers("360"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 4,
    rating: 94,
    image: camera,
  },
  {
    id: 14,
    name: "Curology Product Set ",
    nameAr: "كورولوجي مجموعة منتجات",
    currentPrice: 500,
    currentPriceAr: toArabicNumbers("500"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 4,
    rating: 145,
    image: cream,
  },
  {
    id: 15,
    name: "Kids Electric Car",
    nameAr: "سيارة كهرباء للاطفال",
    currentPrice: 960,
    currentPriceAr: toArabicNumbers("960"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 5,
    rating: 96,
    image: car,
    newProduct: "new",
    colors: "#FB1314",
  },
  {
    id: 16,
    name: "Jr. Zoom Soccer Cleats",
    nameAr: "  قابلات سوكر سوكر",
    currentPrice: 1160,
    currentPriceAr: toArabicNumbers("1160"),
    previousPrice: 0,
    previousPriceAr: toArabicNumbers("0"),
    discount: 0,
    discountAr: toArabicNumbers("0"),
    stars: 5,
    rating: 35,
    image: foot,
    colors: "#EEFF61",
  },
];

export default products;
