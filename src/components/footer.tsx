import styled from "@emotion/styled";
import React from "react";

const StyledFooter = styled.div`
  margin: 10vh 0;
`;

const Supplimental = styled.p`
  color: #aaa;
`;

export function Footer() {
  return (
    <StyledFooter>
      <p>(C) 2022 nanigashi. All rights reserved.</p>
      <Supplimental>
        This site is built with 💖 and 💯 techlonogies.
      </Supplimental>
    </StyledFooter>
  );
}
