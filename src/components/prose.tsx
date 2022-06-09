import React from "react";
import { css, Global } from "@emotion/react";

const globalStyle = css`
  .prose {
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

    & blockquote {
      margin: 1rem 0;
      padding: 0.5rem;
      border-left: 0.3rem solid #dfdfdf;
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
