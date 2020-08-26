import React from "react";
import { useStoreState } from "easy-peasy";

export default function Header() {
  const user = useStoreState((s) => s.users.user);
  return (
    <>
      <h1>Best Practices</h1>
      <div>{user?.name}</div>
    </>
  );
}
