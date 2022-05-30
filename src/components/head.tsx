import React from "react";
import { Helmet } from "react-helmet-async";

interface HelmetProps {
  title?: string;
  description?: string;
  url?: string;
}

export function Head(props: HelmetProps) {
  const title = `${props.title || "Home"} - 何某ノート`;
  const { description, url } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:type" content={props.title ? "article" : "website"} />
      <meta
        property="og:url"
        content={`https://the-nanigashi-note.pages.dev${url}`}
      />
      <meta property="og:site_name" content="何某ノート" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nanigashi_777" />
    </Helmet>
  );
}
