import { useContext } from "react";
import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";

export const HomePage = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
   return (
      <>
         <button onClick={toggleTheme}>{theme}</button>
      </>
   );
};
