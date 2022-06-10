import styled from "@emotion/styled";
import React from "react";

import { constants } from "./constants";

const Supplimental = styled.p`
  color: ${constants.TEXT_BG};
`;

export function Footer() {
  return (
    <footer>
      <p>(C) 2022 nanigashi. All rights reserved.</p>
      <Supplimental>
        This site is built with 💖 and 💯 techlonogies.
      </Supplimental>
    </footer>
  );
}
