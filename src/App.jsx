// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { DataContext } from "./DataContext";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import { useState } from "react";
// import slides from "./productsData";

// function App() {
//   const [language, setLanguage] = useState("en"); // Default language is English
//   const [productsslides, setProductsslides] = useState(slides);

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <DataContext.Provider
//           value={{
//             language,
//             setLanguage,
//             handleLanguageChange,
//             productsslides,
//             setProductsslides,
//           }}
//         >
//           <Home />
//         </DataContext.Provider>
//       ),
//     },
//     // Add other routes here
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { DataContext } from "./DataContext";
// import { useState } from "react";
// import slides from "./productsData";

// // Import Pages
// import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// import SignUp from "./pages/SignUp";
// // import Shop from "./pages/Shop";
// // import ProductDetails from "./pages/ProductDetails";
// // import Cart from "./pages/Cart";
// // import Favorites from "./pages/Favorites";
// // import NotFound from "./pages/NotFound";

// function App() {
//   const [language, setLanguage] = useState("en");
//   const [productsslides, setProductsslides] = useState(slides);

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/ar",
//       element: <Home />,
//     },
//     // {
//     //   path: "/about",
//     //   element: <About />,
//     // },
//     // {
//     //   path: "/contact",
//     //   element: <Contact />,
//     // },
//     {
//       path: "/signup",
//       element: <SignUp />,
//     },
//     {
//       path: "/ar/signup",
//       element: <SignUp />,
//     },
//     // {
//     //   path: "/shop",
//     //   element: <Shop />,
//     // },
//     // {
//     //   path: "/product/:id",
//     //   element: <ProductDetails />,
//     // },
//     // {
//     //   path: "/cart",
//     //   element: <Cart />,
//     // },
//     // {
//     //   path: "/favorites",
//     //   element: <Favorites />,
//     // },
//     // {
//     //   path: "*",
//     //   element: <NotFound />,
//     // },
//   ]);

//   return (
//     <DataContext.Provider
//       value={{
//         language,
//         setLanguage,
//         handleLanguageChange,
//         productsslides,
//         setProductsslides,
//       }}
//     >
//       <RouterProvider router={router} />
//     </DataContext.Provider>
//   );
// }

// export default App;
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { DataContext } from "./DataContext";
// import { useState } from "react";

import { useState } from "react"; // Import useState
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes"; // Import Theme from Radix UI
import { DataContext } from "./DataContext"; // Ensure this is correctly imported
import slides from "./productsData";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import other pages...

function App() {
  const [language, setLanguage] = useState("en");
  const [productsslides, setProductsslides] = useState(slides);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ar",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    // other routes...
  ]);

  return (
    <DataContext.Provider
      value={{
        language,
        setLanguage,
        handleLanguageChange,
        productsslides,
        setProductsslides,
      }}
    >
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </DataContext.Provider>
  );
}

export default App;
