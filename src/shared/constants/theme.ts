export const ThemeMode = {
   Light: "light",
   Dark: "dark",
} as const;

export type ThemeModeType = (typeof ThemeMode)[keyof typeof ThemeMode];

