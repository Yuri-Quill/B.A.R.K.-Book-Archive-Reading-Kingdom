import { Suspense, useContext, useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";
import { ThemeMode } from "@/shared/constants/theme";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Loader } from "@/shared/components/Loader/Loader";

import DarkFav from "/fav-dark.ico";
import LightFav from "/fav-light.ico";
import { refreshTokenThunk } from "@/features/auth/model/auth.thunks";

export const AppLayout = () => {
   const dispatch = useAppDispatch();
   const { theme } = useContext(ThemeContext);

   useEffect(() => {
      dispatch(refreshTokenThunk())
         .unwrap()
         .catch(() => {
            console.log("Refresh token failed, user should login again");
         });
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
            <Suspense fallback={<Loader fullPage={true} />}>
               <Outlet />
            </Suspense>
         </main>

         <Footer />
      </>
   );
};
