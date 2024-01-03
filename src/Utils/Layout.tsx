import Meteors from "../components/magicui/meteors";
import "./index.css";
import { AppProviderProps } from "../logic/types";

const Layout: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <div className="layout bg-gray-200 dark:bg-dark-charcoal  flex flex-col   overflow-hidden   transition duration-500 ease-in-out transform ">
      {children}
      <Meteors number={10} />
    </div>
  );
};

export default Layout;
