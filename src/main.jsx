import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Theme } from "@radix-ui/themes"; // Import Theme from Radix UI
// import "@radix-ui/themes/styles.css"; // Ensure styles are included
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Theme>
//       <App />
//     </Theme>
//   </React.StrictMode>
// );
