import { useState, useEffect } from "react";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";

import { ThemeMode } from "@/shared/constants/theme";

import type { ChildrenProps } from "@/app/types/common";
import type { ThemeModeType } from "@/shared/constants/theme";

export const ThemeProvider = ({ children }: ChildrenProps) => {
   const [theme, setTheme] = useState<ThemeModeType>(() => {
      const stored = localStorage.getItem("theme") as ThemeModeType | null;
      return stored === ThemeMode.Dark || stored === ThemeMode.Light
         ? stored
         : ThemeMode.Dark;
   });

   useEffect(() => {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) =>
         prev === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
      );
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
