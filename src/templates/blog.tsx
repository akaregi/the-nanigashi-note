import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import styled from "@emotion/styled";

import { constants } from "../components/constants";
import { Layout } from "../components/layout";
import { Prose } from "../components/prose";
import { Head } from "../components/head";

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

  font-size: 2rem;
`;

const CategoryTag = styled.p`
  margin-top: 5vh;

  color: ${constants.TEXT_BG};
`;

const Pagenation = styled.ul`
  margin: 10vh 0;
  padding: 0;

  & li {
    list-style: none;

    & a {
      &::before {
        content: " …… ";
        color: ${constants.TEXT_FG};
      }
    }
  }
`;

export default function BlogPage({
  data,
  pageContext: { next, previous },
}: PageProps<Queries.BlogPageQuery, PageContext>) {
  const article = data.microcmsBlogs;

  return (
    <Layout>
      <Head
        title={article?.title || ""}
        pageUrl={`/articles/${article?.blogsId}`}
      />

      <article>
        <Title>{article?.title}</Title>
        <Prose html={article?.content ?? ""} />
        <CategoryTag>{`#${article?.category?.name || "未指定"}`}</CategoryTag>
      </article>

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
      category {
        name
      }
    }
  }
`;
