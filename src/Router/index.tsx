import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import HTML from "../Pages/HTML";
import CSS from "../Pages/CSS";
import Javascript from "../Pages/Javascript";
import Accesibility from "../Pages/Accesibility";
import NotFound from "../Pages/NotFound";
import LoginRegister from "../Pages/LoginRegister";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/js" element={<Javascript />} />
        <Route path="/accesibility" element={<Accesibility />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
