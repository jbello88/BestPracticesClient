import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Login() {
  const addUser = useStoreActions((a) => a.users.addUser);

  const userLogin = () => {
    console.log("logged in");
    addUser("UserName");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={userLogin}>Click</button>
    </div>
  );
}
