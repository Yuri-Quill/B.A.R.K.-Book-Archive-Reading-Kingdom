import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "@/features/footer/components/Footer";
import { Header } from "@/features/header/components/Header";
import { Loader } from "@/shared/components/Loader/Loader";

export const AppLayout = () => {
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
