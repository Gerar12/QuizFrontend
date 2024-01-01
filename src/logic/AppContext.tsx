import React, { useState } from "react";
import { AppProviderProps, ContextType, Theme } from "./types";

const AppContext = React.createContext<ContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login, setLogin] = React.useState<boolean>(true);
  // Inicializa el estado con el tipo Theme
  const [theme, setTheme] = useState<Theme>(() => {
    // Asegúrate de que esta comprobación se realice en el lado del cliente
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  return (
    <AppContext.Provider value={{ theme, setTheme, login }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
