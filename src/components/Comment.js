import React from "react";

export default function Comment({ data }) {
  return (
    <>
      <div>{data.content}</div>
      <div>{data.by}</div>
    </>
  );
}
