import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import { constants } from "./constants";
import { Navigation } from "./navigation";
import { Head } from "./head";
import { Footer } from "./footer";

const Container = styled.div`
  max-width: 1024px;
  margin: 10vh 10vw;

  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-kerning: normal;
  font-feature-settings: "palt" 1;
  line-height: 1.7;
  color: ${constants.TEXT_FG};

  word-break: normal;
  letter-spacing: 0.04rem;

  box-sizing: border-box;

  @media screen and (${constants.SCREEN_SM}) {
    font-size: 16px;

    margin: 10vh 5%;
  }
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
    color: ${constants.LINK_PRIMARY};

    &:hover {
      color: ${constants.LINK_SECONDARY};
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
        <Footer />
      </Container>
    </>
  );
}
