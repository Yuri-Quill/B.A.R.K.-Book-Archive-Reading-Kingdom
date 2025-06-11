import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "@/app/store/store";
import { router } from "@/app/router";

import "@assets/styles/reset.scss";

import "@assets/fonts/work-sans/font-work-sans.scss";

import "./index.scss";
import { ThemeProvider } from "@/shared/context/ThemeContext/ThemeProvider";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
         <ThemeProvider>
            <RouterProvider router={router} />
         </ThemeProvider>
      </Provider>
   </StrictMode>
);
