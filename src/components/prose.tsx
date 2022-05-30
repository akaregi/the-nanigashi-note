import React from "react";
import { css, Global } from "@emotion/react";

const globalStyle = css`
  .prose {
    margin: 10vh 0;

    & ul {
      margin: 1rem 3rem;
    }

    & h2 {
      font-size: 1.8rem;
      margin: 2rem 0 1rem;
    }

    & h3 {
      font-size: 1.5rem;
      margin: 1.5rem 0 0.8rem;
    }
  }
`;

export function Prose(props: { html: string }) {
  return (
    <>
      <Global styles={globalStyle} />
      <div className="prose" dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  );
}
