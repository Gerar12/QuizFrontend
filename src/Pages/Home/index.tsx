// import { useContext } from "react";
// import { AppContext } from "../../logic/AppContext";

const Home = () => {
  // const context = useContext(AppContext);
  // if (!context) {
  //   return <div>Loading...</div>; // O maneja este caso como prefieras
  // }
  // const { theme } = context;

  return (
    <>
      <main className="md:flex justify-evenly items-center lg:mt-20   ">
        <div className="mt-5 0 p-2  text-center">
          <h1 className=" text-4xl  font-medium dark:text-white  w-100 md:w-96 ">
            Welcome to the{" "}
            <span className="font-extrabold text-5xl">Frontend Quiz!</span>
          </h1>
          <p className="mt-5 dark:text-soft-blue">
            Pick a subject to get started.
          </p>
        </div>
        <div className="flex flex-col gap-5  items-center p-10 md:mt-10">
          <div className="flex items-center gap-5 p-5 bg-white dark:bg-slate-gray rounded-md w-full md:w-80 shadow-xl">
            <img
              src="/images/icon-html.svg "
              alt="icon-html"
              className="bg-orange-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white ">HTML</p>
          </div>
          <div className="dark:bg-slate-gray flex items-center gap-5 p-5 bg-white rounded-md w-full shadow-xl  md:w-80 ">
            <img
              src="/images/icon-css.svg "
              alt="icon-html"
              className="bg-green-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white ">CSS</p>
          </div>
          <div className="dark:bg-slate-gray flex items-center gap-5 p-5 bg-white rounded-md w-full shadow-xl  md:w-80">
            <img
              src="/images/icon-js.svg "
              alt="icon-html"
              className="bg-blue-100 rounded-md "
            />
            <p className="font-medium text-xl dark:text-white ">JavaScript</p>
          </div>
          <div className="dark:bg-slate-gray flex items-center gap-5 p-5 bg-white rounded-md w-full shadow-xl  md:w-80">
            <img
              src="/images/icon-accessibility.svg "
              alt="icon-html"
              className="bg-purple-100 rounded-md"
            />
            <p className="font-medium text-xl dark:text-white ">
              Accessibility
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
