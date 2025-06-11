import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";

export const AppLayout = () => {
   return (
      <>
         <Header />

         <main>
            <Suspense fallback={<div>Loading</div>}>
               <Outlet />
            </Suspense>
         </main>

         <Footer />
      </>
   );
};
