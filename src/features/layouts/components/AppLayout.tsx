import { Suspense, useContext, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Loader } from "@/shared/components/Loader/Loader";
import DarkFav from "@assets/logo/logo-dark-theme.webp";
import LightFav from "@assets/logo/logo-light-theme.webp";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";
import { ThemeMode } from "@/shared/constants/theme";

export const AppLayout = () => {
   const { theme } = useContext(ThemeContext);

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
