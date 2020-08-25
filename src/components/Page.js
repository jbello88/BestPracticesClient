import React from "react";

export default function Page({ data }) {
  if (!data?.elements?.length) {
    return <div>Page</div>;
  }

  return (
    <div>
      {data.elements.map((e) => (
        <h3>{e.title}</h3>
      ))}
    </div>
  );
}
