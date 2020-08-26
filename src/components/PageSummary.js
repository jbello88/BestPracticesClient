import React from "react";

export default function PageSummary({ page, pageReqeuested }) {
  return (
    <div onClick={pageReqeuested(page.slug)}>
      <h2>{page.subject}</h2>
      <p>{page.subtitle}</p>
    </div>
  );
}
