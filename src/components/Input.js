import React, { useContext, useEffect, useRef } from "react";

import { FormContext } from "./FormContext";

export function Input({ name }) {
  const inputRef = useRef();
  const { registerField } = useContext(FormContext);

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current);
    }
  }, [name, registerField]);

  return <input name={name} ref={inputRef} />;
}
