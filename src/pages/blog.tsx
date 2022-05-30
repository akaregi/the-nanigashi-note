import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import styled from "@emotion/styled";

import { Layout } from "../components/layout";
import { Prose } from "../components/prose";

type PageContext = {
  next?: {
    blogsId: string;
    title: string;
  };

  previous?: {
    blogsId: string;
    title: string;
  };
};

const Title = styled.h1`
  margin: 10vh 0;
`;

const Pagenation = styled.ul`
  padding: 0;

  & li {
    list-style: none;

    & a {
      &::before {
        content: " …… ";
        color: #161723;
      }
    }
  }
`;

export default function BlogPage({
  data,
  pageContext: { next, previous },
}: PageProps<Queries.BlogPageQuery, PageContext>) {
  const { microcmsBlogs } = data;

  return (
    <Layout>
      <Title>{microcmsBlogs?.title}</Title>
      <Prose html={microcmsBlogs?.content ?? ""} />
      <Pagenation>
        {next && (
          <li>
            次の記事
            <Link to={`/articles/${next.blogsId}/`}>{next.title}</Link>
          </li>
        )}
        {previous && (
          <li>
            以前の記事
            <Link to={`/articles/${previous.blogsId}/`}>{previous.title}</Link>
          </li>
        )}
      </Pagenation>
    </Layout>
  );
}

export const query = graphql`
  query BlogPage($id: String!) {
    microcmsBlogs(blogsId: { eq: $id }) {
      blogsId
      title
      content
      publishedAt
    }
  }
`;
