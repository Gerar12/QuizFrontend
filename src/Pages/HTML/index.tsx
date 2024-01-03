import { useState } from "react";
import Quiz from "../../components/Quiz";
import "./index.css";

const HTML = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [warning, setWarning] = useState(true);
  return (
    <>
      {warning ? (
        <>
          <main className="container flex flex-col  p-5 mt-5 dark:text-white justify-center items-center m-auto">
            <div className=" text-center mt-10">
              <p className="text-lg font-semibold  ">Quiz de HTML</p>
              <p className="text-sm mt-2">
                En esta prueba medirás tu nivel teórico sobre HTML. Elige la
                dificultad para comenzar.
              </p>
            </div>
            <div>
              <form className="  flex flex-wrap justify-center  mt-5">
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2 justify-center ">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="difficulty"
                        id="easy"
                        className="w-4 h-4 "
                        value="easy"
                      />
                      <span className="text-sm">Easy (10)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="difficulty"
                        id="intermediate"
                        className="w-4 h-4"
                        value="intermediate"
                      />
                      <span className="text-sm">Intermediate (10)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="difficulty"
                        id="hard"
                        className="w-4 h-4"
                        value="hard"
                      />
                      <span className="text-sm">Hard (10)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="difficulty"
                        id="complete"
                        className="w-4 h-4"
                        value="complete"
                      />
                      <span className="text-sm">Complete (30)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Comenzar"
                      className="mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-vibrant-purple hover:bg-purple-700 transition duration-300 md:py-2 md:text-lg md:px-10 cursor-pointer"
                    />
                  </div>
                </div>
              </form>
              <p className="mt-20 font-extralight text-sm text-center ">
                Contesta de manera honesta y comparte tus resultados con los
                demas usuarios dela red y disfruta
              </p>
            </div>
          </main>
        </>
      ) : (
        <Quiz />
      )}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default HTML;
