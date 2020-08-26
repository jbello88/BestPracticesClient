import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Picture from "./Picture";
import Code from "./Code";
import Video from "./Video";

const createElement = (data) => {
  switch (data.type) {
    case "T":
      return <Title data={data} />;
    case "P":
      return <Paragraph data={data} />;
    case "I":
      return <Picture data={data} />;
    case "C":
      return <Code data={data} />;
    case "V":
      return <Video data={data} />;
    default:
      return <div></div>;
  }
};

export default function Page() {
  let { slug } = useParams();
  const page = useStoreState((state) => state.pages.page);
  const loadPage = useStoreActions((a) => a.pages.loadPage);

  useEffect(() => {
    loadPage(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!page?.elements?.length) {
    return <div>Page</div>;
  }

  return (
    <div>
      {page.elements
        .sort((a, b) => a.order - b.order)
        .map((e) => createElement(e))}
    </div>
  );
}
