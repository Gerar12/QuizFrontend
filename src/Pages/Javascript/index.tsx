import { useState } from "react";
import Quiz from "../../components/Quiz";

const Javascript = () => {
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

export default Javascript;
