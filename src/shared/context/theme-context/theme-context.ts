import { createContext } from "react";

import { ThemeMode } from "@/shared/constants/theme";

import type { ThemeContextValue } from "@/shared/context/theme-context/theme.types";

export const ThemeContext = createContext<ThemeContextValue>({
   theme: ThemeMode.Dark,
   toggleTheme: () => {},
});
