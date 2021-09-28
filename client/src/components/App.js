import Login from "./Login";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id')
  
  return <>{id}<Login onIdSubmit={setId}></Login></>;
}

export default App;
