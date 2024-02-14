import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>my custom App</h1>
//     </div>
//   );
// }

const ReactElement = React.createElement(
  "a",
  { href: "https://www.google.com/", target: "_blank" },
  "click to go to google.com"
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{ReactElement}</React.StrictMode>
);
