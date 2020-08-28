import React from "react";
import marked from "marked";

export default function Paragraph({ data }) {
  const markdownAsHtml = marked(data.text);
  return <div dangerouslySetInnerHTML={{ __html: markdownAsHtml }}></div>;
}
