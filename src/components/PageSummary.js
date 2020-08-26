import React from "react";
import { useHistory } from "react-router-dom";

export default function PageSummary({ page }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/topic/" + page.slug)}>
      <h2>{page.subject}</h2>
      <p>{page.subtitle}</p>
    </div>
  );
}
