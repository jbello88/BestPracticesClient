import React from "react";
import { useStoreState } from "easy-peasy";
import PageSummary from "./PageSummary";

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
        <PageSummary key={p._id} page={p} />
      ))}
    </div>
  );
}
