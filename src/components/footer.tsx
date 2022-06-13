import React from "react";

import { constants } from "./constants";

const style = {
  color: constants.TEXT_BG,
};

export function Footer() {
  return (
    <footer>
      <p>(C) 2022 nanigashi. All rights reserved.</p>
      <p style={style}>This site is built with 💖 and 💯 techlonogies.</p>
    </footer>
  );
}
