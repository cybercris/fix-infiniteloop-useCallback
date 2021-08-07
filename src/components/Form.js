import React, { useCallback, useState } from "react";

import { FormContext } from "./FormContext";

export function Form({ children }) {
  const [inputs, setInputs] = useState([]);

  const registerField = useCallback((name, ref) => {
    setInputs((oldInputs) => [...oldInputs, { name, ref }]);
  }, []);

  //wrong
  //   function registerField(name, ref) {
  //     setInputs([...inputs, { name, ref }]);
  //   }

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}
