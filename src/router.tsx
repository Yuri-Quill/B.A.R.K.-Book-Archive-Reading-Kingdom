import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: null,
      errorElement: null,
      children: [
         {
            index: true,
            element: null,
         },
      ],
   },
]);

export default router;
