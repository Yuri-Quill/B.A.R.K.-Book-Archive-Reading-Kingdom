import { Suspense, useContext, useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";
import { ThemeMode } from "@/shared/constants/theme";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Loader } from "@/shared/components/Loader/Loader";

import DarkFav from "/fav-dark.ico";
import LightFav from "/fav-light.ico";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { refreshTokenThunk } from "@/features/auth/model/auth.thunks";

export const AppLayout = () => {
   const dispatch = useAppDispatch();
   const { loading } = useAppSelector((state) => state.auth);
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

   if (loading) return <Loader fullscreen />;

   return (
      <>
         <Header />
         <main>
            <Suspense fallback={<Loader fullscreen />}>
               <Outlet />
            </Suspense>
         </main>
         <Footer />
      </>
   );
};
