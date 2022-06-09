import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";

interface HelmetProps {
  title?: string;
  description?: string;
  url?: string;
}

export function Head(props: HelmetProps) {
  const { description, url } = props;

  const renderHeader = (data: Queries.HeadQuery) => {
    const siteTitle = data.site?.siteMetadata?.title || "";
    const pageTitle = `${props.title || "Home"} - ${siteTitle}`;

    return (
      <Helmet
        htmlAttributes={{
          lang: "ja",
        }}
      >
        <title>{pageTitle}</title>
        <meta name="description" content={description}></meta>
        <meta
          property="og:type"
          content={props.title ? "article" : "website"}
        />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nanigashi_777" />
      </Helmet>
    );
  };

  return (
    <StaticQuery
      query={graphql`
        query Head {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: Queries.HeadQuery) => renderHeader(data)}
    />
  );
}
