import { useContext, useState } from "react";
import { Container, Footer, Header } from "../components";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { DataContext } from "../DataContext";
function Contact() {
  const toArabicNumbers = (str) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return str.replace(/\d/g, (digit) => arabicNumbers[parseInt(digit)]);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return /^[A-Za-zÀ-ž\s]{2,50}$/.test(value);
      case "email":
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      case "phone":
        return /^01[0-9]{9}$/.test(value);
      case "message":
        return value.trim() !== "";
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {
      name: !validateField("name", formData.name),
      email: !validateField("email", formData.email),
      phone: !validateField("phone", formData.phone),
      message: !validateField("message", formData.message),
    };

    setFormErrors(errors);
    if (!Object.values(errors).some((error) => error)) {
      // Submit form data
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    // Phone number processing
    if (name === "phone") {
      processedValue = value.replace(/\D/g, "");
      if (!processedValue.startsWith("01") && processedValue.length > 0) {
        processedValue = `01${processedValue.slice(0, 9)}`;
      }
      processedValue = processedValue.slice(0, 11);
    }

    // Name processing
    if (name === "name") {
      processedValue = value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }
    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    // Immediate validation
    const isValid = validateField(name, processedValue);
    setFormErrors((prev) => ({ ...prev, [name]: !isValid }));
  };
  const { language } = useContext(DataContext);
  return (
    <>
      <Header />
      <Container lgPx="36">
        <div className="px-4 flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center gap-14 mb-20">
          <div className="lg:px-8 px-8 lg:py-8 py-8 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:mt-[20px] mt-6 lg:h-[457px] lg:w-[340px] w-full rounded-[4px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col mb-10 gap-7 items-center justify-center lg:items-start lg:justify-start">
              <div className="flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-Button">
                  <BsTelephone className="text-white text-xl" />
                </div>
                <p className="font-medium text-base">
                  {language === "ar" ? "اتصل بنا" : "Call To Us"}
                </p>
              </div>
              <p className="text-[14px] leading-[21px]">
                {language === "ar"
                  ? toArabicNumbers("نحن متاحين 24/7، 7 ايام في الاسبوع")
                  : "We are available 24/7, 7 days a week."}
              </p>
              <p className="text-[14px] leading-[21px]">
                {language === "ar"
                  ? toArabicNumbers("    Phone: +8801611112222")
                  : "Phone: +8801611112222"}
              </p>
              <div className="w-full border-b border-gray-400"></div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-center lg:items-start lg:justify-start">
              <div className="flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-Button">
                  <MdOutlineEmail className="text-white text-xl" />
                </div>
                <p className="font-medium text-base">
                  {language === "ar" ? "ارسل لنا" : "Write To US"}
                </p>
              </div>
              <p className="text-[14px] leading-[21px] text-center ">
                {language === "ar"
                  ? toArabicNumbers("اكتب لنا وسوف نتصل بك في 24 ساعة")
                  : "Write to us and we will contact you within 24 hours."}
              </p>
              <p className="text-[14px] leading-[21px]">
                Emails: customer@exclusive.com
              </p>
              <p className="text-[14px] leading-[21px]">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="px-4 lg:w-[700px] w-full lg:h-[457px] rounded-[4px] lg:px-8 lg:py-8 py-8 flex flex-col items-center justify-center lg:items-start lg:justify-start lg:mt-[20px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex lg:flex-row flex-col gap-4 lg:gap-4">
                <div className="relative flex items-center justify-center">
                  <input
                    type="text"
                    name="name"
                    placeholder={language === "ar" ? "اسمك" : "Your Name"}
                    className={`outline-none text-sm placeholder:text-gray-400 lg:w-[200px] w-[300px] md:w-[400px] h-[50px] rounded-[4px] border-none px-4 bg-[#F5F5F5] focus:ring-2 focus:ring-blue-500 transition-all duration-200 peer ${
                      formErrors.name ? "ring-2 ring-red-500" : ""
                    }`}
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (/[0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    autoComplete="name"
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none peer-placeholder-shown:block hidden ${
                      language === "ar"
                        ? "lg:right-20 md:right-36 right-20"
                        : "lg:left-28 md:left-40 left-28"
                    }`}
                  >
                    *
                  </span>
                </div>
                <div className="relative flex items-center justify-center">
                  <input
                    type="email"
                    placeholder={
                      language === "ar" ? "بريدك الالكتروني" : "Your Email"
                    }
                    name="email"
                    className={`outline-none text-sm placeholder:text-gray-400 lg:w-[200px] md:w-[400px] w-full h-[50px] rounded-[4px] border-none px-4 bg-[#F5F5F5] focus:ring-2 focus:ring-blue-500 transition-all duration-200 peer ${
                      formErrors.email ? "ring-2 ring-red-500" : ""
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none peer-placeholder-shown:block hidden ${
                      language === "ar"
                        ? "lg:right-32 md:right-48 right-36"
                        : "lg:left-28 md:left-40 left-28"
                    }`}
                  >
                    *
                  </span>
                </div>
                <div className="relative flex items-center justify-center">
                  <input
                    type="tel"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    placeholder={
                      language === "ar" ? "رقم الهاتف" : "Your Phone"
                    }
                    className={`outline-none text-sm placeholder:text-gray-400 lg:w-[200px] md:w-[400px] w-full h-[50px] rounded-[4px] border-none px-4 bg-[#F5F5F5] focus:ring-2 focus:ring-blue-500 transition-all duration-200 peer ${
                      formErrors.phone ? "ring-2 ring-red-500" : ""
                    }`}
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 text-red-500 pointer-events-none peer-placeholder-shown:block hidden ${
                      language === "ar"
                        ? "lg:right-28 md:right-40 right-28"
                        : "lg:left-28 md:left-40 left-28"
                    }`}
                  >
                    *
                  </span>
                </div>
              </div>
              <div className="relative flex items-center justify-center mt-6">
                <textarea
                  placeholder={language === "ar" ? "رسالتك" : "Your Message"}
                  name="message"
                  className={`placeholder:px-4  placeholder:pt-4 outline-none text-base
                placeholder:text-gray-400 lg:w-[637px] md:w-[500px] w-full h-[207px] rounded-[4px] border-none
                bg-[#F5F5F5] focus:ring-2 focus:ring-blue-500 transition-all
                duration-200 resize-none peer ${
                  formErrors.message ? "ring-2 ring-red-500" : ""
                }`}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <span
                  className={`absolute -translate-y-1/2 text-red-500 pointer-events-none peer-placeholder-shown:block hidden ${
                    language === "ar"
                      ? "lg:right-28 md:right-40 right-24 top-8"
                      : "lg:left-36 md:left-40 left-36 top-8"
                  }`}
                >
                  *
                </span>
              </div>
              {/* Error Messages */}
              {Object.values(formErrors).some((error) => error) && (
                <div className="text-red-500 text-sm">
                  {language === "ar"
                    ? "يرجى ملء جميع الحقول المطلوبة"
                    : "Please fill in all the required fields."}
                </div>
              )}
              <div className="w-full flex justify-end mt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 justify-center mx-auto md:mx-0 w-[215px] h-[56px] rounded-[4px] py-4 px-6 text-base font-medium text-white bg-Button hover:bg-ButtonDark transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  {language === "ar" ? "ارسل الرسالة" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Contact;
