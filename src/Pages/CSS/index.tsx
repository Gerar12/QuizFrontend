import { useState } from "react";
import Quiz from "../../components/Quiz";

const CSS = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [warning, setWarning] = useState(true);
  return (
    <>
      {warning ? (
        <>
          <h1>Aviso importante</h1>
        </>
      ) : (
        <Quiz />
      )}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CSS;
