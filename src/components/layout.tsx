import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import { Navigation } from "./navigation";
import { Head } from "./head";

const Container = styled.div`
  max-width: 768px;
  margin: 10vh 10vw;

  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-kerning: normal;
  font-feature-settings: "palt" 1;
  line-height: 1.7;
  color: #161723;

  word-break: normal;
  letter-spacing: 0.04rem;

  box-sizing: border-box;
`;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #5982f3;

    &:hover {
      color: #385198;
    }

    transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  img {
    max-width: 100%;

    margin: 1rem 0;
  }
`;

export function Layout({ children, ...props }: { children: ReactNode }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Head />
      <Container>
        <Navigation />
        <main {...props}>{children}</main>
      </Container>
    </>
  );
}
