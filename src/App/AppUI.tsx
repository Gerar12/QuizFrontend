import AppRouter from "../Router";
import Layout from "../Utils/Layout";

import Header from "../components/Header";
const AppUI = () => {
  return (
    <>
      <Layout>
        <Header />
        <AppRouter />
      </Layout>
    </>
  );
};

export default AppUI;
