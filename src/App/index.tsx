import AppUI from "./AppUI";
import { AppProvider } from "../logic/AppContext";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <AppUI />
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
