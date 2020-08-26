import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Page() {
  let { slug } = useParams();
  const page = useStoreState((state) => state.pages.page);
  const loadPage = useStoreActions((actions) => actions.pages.loadPage);

  useEffect(() => {
    loadPage(slug);
  }, []);

  if (!page?.elements?.length) {
    return <div>Page</div>;
  }

  return (
    <div>
      {page.elements.map((e) => (
        <h3>{e.title}</h3>
      ))}
    </div>
  );
}
