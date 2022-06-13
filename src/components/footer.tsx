import React from "react";

import { constants } from "./constants";

const footerStyle = {
  margin: "5rem 0",
};

const memoStyle = {
  color: constants.TEXT_BG,
};

export function Footer() {
  return (
    <footer style={footerStyle}>
      <p>(C) 2022 nanigashi. All rights reserved.</p>
      <p style={memoStyle}>This site is built with 💖 and 💯 techlonogies.</p>
    </footer>
  );
}
