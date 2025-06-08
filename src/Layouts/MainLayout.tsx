import Header from "@/Components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
   return (
      <>
         <Header />

         <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </main>

         <footer className="footer">footer</footer>
      </>
   );
};

export default MainLayout;
