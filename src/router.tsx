import { createBrowserRouter } from "react-router-dom";

const router = () =>
   createBrowserRouter([
      {
         path: "/",
         element: "",
         errorElement: "",
         children: [
            {
               index: true,
               element: "",
            },
         ],
      },
   ]);

export default router;
