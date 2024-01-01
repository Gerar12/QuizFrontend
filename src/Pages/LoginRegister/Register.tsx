import { LoginProps } from "../../logic/types";

const Register: React.FC<LoginProps> = ({ onRegisterClick }) => {
  return (
    <>
      <form className="flex flex-col gap-5 formulario  ">
        <div className="flex flex-col gap-2">
          <label htmlFor="userid" className="dark:text-white">
            User
          </label>
          <input
            type="text"
            id="userid"
            className="py-2 dark:border-white border-black  bg-transparent border-b outline-none dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="py-2 bg-transparent border-b dark:border-white border-black outline-none dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="dark:text-white">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="py-2 bg-transparent border-b dark:border-white border-black outline-none dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="py-2 bg-transparent border-b dark:border-white border-black outline-none dark:text-white"
          />
        </div>
        <div>
          <button
            type="button"
            className="text-green-700  dark:text-green-500  cursor-pointer"
            onClick={onRegisterClick}
          >
            Have an account?
          </button>
        </div>
        <button
          type="submit"
          className="p-2 bg-slate-gray text-white rounded-md"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
