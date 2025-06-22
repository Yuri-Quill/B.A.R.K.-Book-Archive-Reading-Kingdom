import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { logoutAuthThunk } from "@/features/auth/model/auth.thunks";
import { Button } from "@/shared/components/button/Button";
import { ThemeContext } from "@/shared/context/theme-context/theme-context";
import { useContext } from "react";
import { toast } from "react-toastify";

export const HomePage = () => {
   const { user } = useAppSelector((state) => state.auth);
   const { theme, toggleTheme } = useContext(ThemeContext);
   const dispatch = useAppDispatch();
   const logout = async () => {
      try {
         await dispatch(logoutAuthThunk()).unwrap();
         toast.success("Logged out successfully");
      } catch (err: unknown) {
         const error = err as { message: string };
         toast.error(error.message);
      }
   };
   return (
      <>
         <Button onClick={toggleTheme}>{theme}</Button>
         <Button isActive onClick={logout}>
            Log Out
         </Button>

         <h2>{user?.username}</h2>
      </>
   );
};
