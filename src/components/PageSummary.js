import React from "react";
import { useHistory } from "react-router-dom";

export default function PageSummary({ page }) {
  const history = useHistory();

  return (
    <div className="m-4" onClick={() => history.push("/topic/" + page.slug)}>
      <h3>{page.subject}</h3>
      <p>{page.subtitle}</p>
    </div>
  );
}
