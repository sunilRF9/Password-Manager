import "./App.css";
import Formsignup from "./Form";
import React, { useState } from "react";
import Formsuccess from "./Formsuccess";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? <Formsignup submitForm={submitForm} /> : <Formsuccess />}
    </div>
  );
}
export default App;