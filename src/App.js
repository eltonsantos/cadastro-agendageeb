import React from "react";

import ListaMembros from "./components/ListaMembros";
import CadastroMembros from "./components/CadastroMembros";

const App = () => {
  return (
    <>
      <h1>AgendaGEEB</h1>

      <ListaMembros />
      <CadastroMembros />
    </>
  );
};

export default App;
