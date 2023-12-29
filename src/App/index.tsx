import AppUI from "./AppUI";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppUI />
      </BrowserRouter>
    </>
  );
};

export default App;
