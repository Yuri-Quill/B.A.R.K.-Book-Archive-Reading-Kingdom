import { Suspense, useContext, useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";
import { ThemeMode } from "@/shared/constants/theme";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Loader } from "@/shared/components/Loader/Loader";

import DarkFav from "/fav-dark.ico";
import LightFav from "/fav-light.ico";
import { useAppDispatch } from "@/app/store/hooks";
import { refreshTokenThunk } from "@/features/auth/model/auth.thunks";

export const AppLayout = () => {
   const dispatch = useAppDispatch();

   const { theme } = useContext(ThemeContext);

   useEffect(() => {
      dispatch(refreshTokenThunk());
   }, [dispatch]);

   useLayoutEffect(() => {
      const favicon =
         document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (favicon) {
         favicon.href = theme === ThemeMode.Dark ? DarkFav : LightFav;
      }
   }, [theme]);

   return (
      <>
         <Header />
         <main>
            <Suspense fallback={<Loader fullscreen />}>
               <Outlet />
            </Suspense>
         </main>
         <Footer />

         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme={theme === ThemeMode.Dark ? "dark" : "light"}
         />
      </>
   );
};
