// import { useContext } from "react";
// import { AppContext } from "../../logic/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  // const context = useContext(AppContext);
  // if (!context) {
  //   return <div>Loading...</div>; // O maneja este caso como prefieras
  // }
  // const { theme } = context;

  return (
    <>
      <main className="md:flex justify-evenly items-center mt-5   z-10">
        <div className="mt-5 0 p-2  text-center">
          <h1 className=" text-3xl  font-medium dark:text-white  w-100 md:w-96 ">
            Welcome to the{" "}
            <span className="font-extrabold text-4xl">Frontend Quiz!</span>
          </h1>
          <p className="mt-5 dark:text-soft-blue">
            Pick a subject to get started.
          </p>
        </div>
        <div className="flex flex-col gap-5  items-center p-10 md:mt-10">
          <Link
            to={"/html"}
            className="flex items-center gap-5 p-5 bg-white dark:bg-slate-gray rounded-md w-full md:w-80 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              src="/images/icon-html.svg"
              alt="icon-html"
              className="bg-orange-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white">HTML</p>
          </Link>
          <Link
            to={"/css"}
            className="flex items-center gap-5 p-5 bg-white dark:bg-slate-gray rounded-md w-full md:w-80 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              src="/images/icon-css.svg "
              alt="icon-html"
              className="bg-green-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white ">CSS</p>
          </Link>
          <Link
            to={"/js"}
            className="flex items-center gap-5 p-5 bg-white dark:bg-slate-gray rounded-md w-full md:w-80 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              src="/images/icon-js.svg "
              alt="icon-html"
              className="bg-blue-100 rounded-md "
            />
            <p className="font-medium text-xl dark:text-white ">JavaScript</p>
          </Link>
          <Link
            to={"/accesibility"}
            className="flex items-center gap-5 p-5 bg-white dark:bg-slate-gray rounded-md w-full md:w-80 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <img
              src="/images/icon-accessibility.svg "
              alt="icon-html"
              className="bg-purple-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white ">
              Accessibility
            </p>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
