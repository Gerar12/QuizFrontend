import { ReactNode } from "react";

export type AppProviderProps = {
  children: ReactNode;
};

export type Theme = "light" | "dark";

export type ContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  login: boolean;
};

export interface LoginProps {
  onRegisterClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
