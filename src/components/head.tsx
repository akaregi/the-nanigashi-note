import React from "react";
import { Helmet } from "react-helmet-async";

export function Head(props: { title?: string }) {
  const { title } = props;

  return (
    <Helmet>
      <title>{`${title || "Home"} - 何某ノート`}</title>
    </Helmet>
  );
}
