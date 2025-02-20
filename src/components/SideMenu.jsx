import { useContext } from "react";
import { DataContext } from "../DataContext";
export function SideMenu() {
  const { language } = useContext(DataContext);
  const navItems = [
    {
      name: "Woman’s Fashion",
      labelEn: "Woman’s Fashion",
      labelAr: "أزياء النساء",
    },
    {
      name: "Men’s Fashion",
      labelEn: "Men’s Fashion",
      labelAr: "أزياء الرجال",
    },
    { name: "Electronics", labelEn: "Electronics", labelAr: "الإلكترونيات" },
    {
      name: "Home & Lifestyle",
      labelEn: "Home & Lifestyle",
      labelAr: "المنزل ونمط الحياة",
    },
    { name: "Medicine", labelEn: "Medicine", labelAr: "الطب" },
    {
      name: "Sports & Outdoor",
      labelEn: "Sports & Outdoor",
      labelAr: "الرياضة والهواء الطلق",
    },
  ];
  // const [activeNav, setActiveNav] = useState(navItems[0].name);
  return (
    <aside className="side-menu  w-[140px] md:w-[220px] lg:w-[350px] h-full min-h-full border-r border-lines-light  lg:p-6 py-4 px-3">
      <div className="flex justify-center md:justify-end">
        <ul className="lg:text-base lg:w-[170px] text-[13px] flex flex-col items-start w-[140px] md:w-[125px] ">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="mb-4 hover:text-Button cursor-pointer"
            >
              {" "}
              <a>{language === "en" ? item.labelEn : item.labelAr}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

