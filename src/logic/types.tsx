import { ReactNode } from "react";

export type AppProviderProps = {
  children: ReactNode;
};

export type Theme = "light" | "dark";

export type ContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
