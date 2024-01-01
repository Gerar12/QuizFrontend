import React, { useState } from "react";
import { RiUser3Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./index.css";

import Login from "./Login";
import Register from "./Register";
const LoginRegister = () => {
  const [register, setRegister] = useState(false);
  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRegister(!register);
    console.log(register);
  };

  return (
    <>
      <main className="flex flex-col  items-center gap-5 mt-10 ">
        <div>
          <h1 className="text-2xl dark:text-gray-50 flex gap-1 font-bold items-center">
            {!register ? "Login" : "Sign In"}
            <span>
              <RiUser3Line />
            </span>
          </h1>
        </div>
        {!register ? (
          <Login onRegisterClick={handleRegister} />
        ) : (
          <Register onRegisterClick={handleRegister} />
        )}
        {!register ? (
          <div className="flex flex-col gap-2">
            <p className="flex  gap-2 items-center border dark:border-white border-gray-500 p-2 dark:text-white cursor-pointer transition-all duration-300 hover:shadow-2xl  hover:scale-105">
              Sign in with <span className="font-bold">GitHub</span>{" "}
              <span>
                {" "}
                <FaGithub className="text-4xl dark:text-white" />
              </span>
            </p>
            <p className="flex  gap-2 items-center border dark:border-white border-gray-500 p-2 dark:text-white cursor-pointe transition-all duration-300 hover:shadow-2xl  hover:scale-105">
              Sign in with <span className="font-bold">Google</span>{" "}
              <span>
                {" "}
                <FcGoogle className="text-4xl dark:text-white" />
              </span>
            </p>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default LoginRegister;
