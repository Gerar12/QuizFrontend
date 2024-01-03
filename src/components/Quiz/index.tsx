const Quiz = () => {
  return (
    <>
      <main className=" flex flex-col md:flex-row m-auto justify-center mt-5 md:mt-20 md:gap-20  md:px-10 lg:px-7 ">
        <div className="flex flex-col  p-5 md:w-1/2 justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-light- slate dark:text-soft-blue">
              Question 1 of 10
            </p>
            <p className="dark:text-white">
              Which of these color contrast ratios defines the minimum WCAG 2.1
              Level AA requirement for normal text?
            </p>
          </div>
          <input
            type="range"
            className="accent-vibrant-purple mt-5"
            max="10"
            min="1"
            value="1"
          />
        </div>
        <div className="flex flex-col gap-2 md:w-1/2 ">
          <div className="px-5">
            <button className="flex gap-5 items-center   w-full p-2 rounded-md bg-white dark:bg-slate-gray ">
              <p className=" bg-gray-200 p-2 px-4 rounded-lg text-slate-gra font-bold text-gray-600">
                A
              </p>
              <p className="dark:text-white ">4.5:1</p>
            </button>
          </div>
          <div className="px-5">
            <button className="flex gap-5 items-center   w-full p-2 rounded-md bg-white dark:bg-slate-gray ">
              <p className=" bg-gray-200 p-2 px-4 rounded-lg text-slate-gra font-bold text-gray-600">
                B
              </p>
              <p className="dark:text-white ">4.5:1</p>
            </button>
          </div>
          <div className="px-5">
            <button className="flex gap-5 items-center   w-full p-2 rounded-md bg-white dark:bg-slate-gray ">
              <p className=" bg-gray-200 p-2 px-4 rounded-lg text-slate-gra font-bold text-gray-600">
                C
              </p>
              <p className="dark:text-white ">4.5:1</p>
            </button>
          </div>
          <div className="px-5">
            <button className="flex gap-5 items-center   w-full p-2 rounded-md bg-white dark:bg-slate-gray ">
              <p className=" bg-gray-200 p-2 px-4 rounded-lg text-slate-gra font-bold text-gray-600">
                D
              </p>
              <p className="dark:text-white ">4.5:1</p>
            </button>
          </div>
          <div className="mt-5 px-5">
            <button className="p-2 text-white w-full bg-vibrant-purple   rounded-md ">
              Submit Answer
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Quiz;
