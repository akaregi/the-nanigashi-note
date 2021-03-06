import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import { constants } from "./constants";
import { Navigation } from "./navigation";
import { Meta } from "./meta";
import { Footer } from "./footer";

const Container = styled.div`
  max-width: 900px;
  margin: 5% 10%;

  font-family: "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-kerning: normal;
  font-feature-settings: "palt" 1;
  line-height: 1.7;
  color: ${constants.TEXT_FG};

  word-break: normal;
  letter-spacing: 0.04rem;

  box-sizing: border-box;

  @media screen and (${constants.SCREEN_MD}) {
    margin: 5%;
  }

  @media screen and (${constants.SCREEN_SM}) {
    font-size: 16px;
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

      <Meta />

      <Container>
        <Navigation />
        <main {...props}>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
