import React from "react";

export default function Title({ data }) {
  return (
    <>
      <h3>{data.title}</h3>;{data.text ? <p>{data.text}</p> : null}
    </>
  );
}
