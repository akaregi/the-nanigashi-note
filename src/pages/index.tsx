import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import styled from "@emotion/styled";

import formatDate from "../utils/date";
import { constants } from "../components/constants";
import { Layout } from "../components/layout";
import { Head } from "../components/head";

const Title = styled.h1`
  margin: 10vh 0;

  font-size: 2rem;
`;

const Posts = styled.ul`
  margin: 10vh 0;
  padding: 0;
`;

const Post = styled.li`
  margin-bottom: 0.5rem;

  list-style: none;
`;

const PostDate = styled.span`
  color: ${constants.TEXT_BG};

  &::after {
    content: " …… ";
  }
`;

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const { allMicrocmsBlogs } = data;

  return (
    <Layout>
      <Head pageUrl="" />

      <Title>投稿一覧</Title>
      <Posts>
        {allMicrocmsBlogs.nodes.map((node) => (
          <Post key={node.blogsId}>
            <PostDate>{formatDate(node.publishedAt!)}</PostDate>{" "}
            <Link to={`/articles/${node.blogsId}`}>{node.title}</Link>
          </Post>
        ))}
      </Posts>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allMicrocmsBlogs(sort: { order: DESC, fields: publishedAt }) {
      nodes {
        blogsId
        title
        publishedAt
        revisedAt
      }
    }
  }
`;
