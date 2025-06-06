import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import router from "@/router";

import "@/styles/reset.scss";
import "@/assets/fonts/work-sans/stylesheet.scss";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
