import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
   return (
      <>
         <header>Header</header>

         <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </main>

         <footer>footer</footer>
      </>
   );
};

export default MainLayout;
