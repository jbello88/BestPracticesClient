import React from "react";
import "./App.css";
import { useStoreState } from "easy-peasy";
import Login from "./components/Login";
import Container from "./components/Container";

function App() {
  const user = useStoreState((s) => s.users.user);
  console.log(user);
  if (user) {
    return (
      <div className="App">
        <Container />
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
