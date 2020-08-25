import React from "react";
import "./App.css";
import { useStoreState } from "easy-peasy";
import Login from "./components/Login";
import Pages from "./components/Pages";

function App() {
  const user = useStoreState((s) => s.users.user);
  console.log(user);
  if (user) {
    return (
      <div className="App">
        <Pages />
      </div>
    );
  }

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
