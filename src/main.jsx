import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Entry from "./Entry.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DesignerContext from "./components/designer/contexts/DesignerContext.jsx";

createRoot(document.getElementById("root")).render(
  <DesignerContext>
    <Entry />
  </DesignerContext>,
);
