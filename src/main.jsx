import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Profile } from "./practice/profile";
// import { Practices } from "./practices";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
    {/* <Profile /> */}
  </StrictMode>
);
