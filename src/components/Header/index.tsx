/* eslint-disable react-hooks/rules-of-hooks */
import { Switch } from "@headlessui/react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../logic/AppContext";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { RiUser3Line } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(AppContext);
  if (!context) {
    return <div>Loading...</div>; // O maneja este caso como prefieras
  }
  const { theme, setTheme, login } = context;

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

  useEffect(() => {
    if (location.pathname != "/") {
      if (!login) {
        navigate("/login-register");
      }
    }
  }, [login, navigate, location.pathname]);

  return (
    <>
      <nav className="navApp mt-10 flex justify-between  mr-5 lg:mr-0 lg:justify-evenly z-10">
        <div className="ml-5 flex gap-10  ">
          {location.pathname === "/login-register" ? (
            <div className="relative">
              <Link
                to={"/"}
                className="absolute inline-flex items-center justify-center w-12 h-12 rounded-full bg-opacity-10 dark:bg-gray-600 bg-black   dark:text-white hover:bg-opacity-20 hover:scale-110 transform transition duration-300  -translate-x-1/5 -translate-y-1/4"
              >
                <BiArrowBack className="text-2xl" />
              </Link>
            </div>
          ) : (
            <Link
              to={"/login-register"}
              className="dark:text-white absolute text-xl cursor-pointer font-bold flex items-center gap-1  "
            >
              Login
              <RiUser3Line />
            </Link>
          )}
        </div>
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
              enabled ? "bg-vibrant-purple" : "bg-vibrant-purple "
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
