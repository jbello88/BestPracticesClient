import React from "react";

export default function Picture({ data }) {
  return (
    <>
      <h4>{data.title}</h4>;
      <img src={data.url} alt={data.title} width="500" height="600" />
      {data.text ? <p>{data.text}</p> : null}
    </>
  );
}
