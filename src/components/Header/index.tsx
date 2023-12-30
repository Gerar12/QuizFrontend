import { Switch } from "@headlessui/react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../logic/AppContext";
import "./index.css";
const Header = () => {
  const context = useContext(AppContext);
  if (!context) {
    return <div>Loading...</div>; // O maneja este caso como prefieras
  }
  const { theme, setTheme } = context;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [enabled, setEnabled] = useState(theme === "dark" ? true : false);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const bodyClassList = document.querySelector("body")?.classList;
    if (theme === "dark") {
      bodyClassList?.add("dark");
    } else {
      bodyClassList?.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="navApp mt-10 flex justify-between mr-5 lg:mr-0 lg:justify-evenly">
        <div></div>
        <div className="flex gap-2">
          <img
            src={
              theme === "light"
                ? "images/icon-sun-dark.svg"
                : "images/icon-sun-light.svg"
            }
            alt="icon-sun"
          />
          <Switch
            checked={enabled}
            onChange={setEnabled}
            onClick={handleChangeTheme}
            className={`${
              enabled ? "bg-vibrant-purple" : "bg-vibrant-purple"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Dark mode</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <img
            src={
              theme === "light"
                ? "images/icon-moon-dark.svg"
                : "images/icon-moon-light.svg"
            }
            alt="icon-moon"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
