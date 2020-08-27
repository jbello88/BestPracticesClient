import React from "react";
import "./App.css";
import { useStoreState } from "easy-peasy";

import Main from "./components/Main";

function App() {
  const user = useStoreState((s) => s.users.user);
  console.log(user);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
