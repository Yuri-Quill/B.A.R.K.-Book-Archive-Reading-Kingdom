import type { ThemeModeType } from "@/shared/constants/theme";

export interface ThemeContextValue {
   theme: ThemeModeType;
   toggleTheme: () => void;
}
