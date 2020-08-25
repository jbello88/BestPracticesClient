import React from "react";
import { useStoreState } from "easy-peasy";
import Page from "./Page";

export default function Pages() {
  const pages = useStoreState((s) => s.pages.pages);

  if (pages?.length === 0) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }

  return (
    <div>
      {pages.map((p) => (
        <Page key={p._id} data={p} />
      ))}
    </div>
  );
}
