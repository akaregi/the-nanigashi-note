import React from "react";
import styled from "@emotion/styled";
import { graphql, Link, StaticQuery } from "gatsby";

const Title = styled.h2`
  margin: 10vh 0;

  font-size: 1.8rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #161723;

  &:hover {
    color: #626280;
  }

  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export function Navigation() {
  const renderNavigation = (data: Queries.NavigationQuery) => {
    const siteTitle = data.site?.siteMetadata?.title || "";

    return (
      <nav>
        <Title>
          <StyledLink to={`/`}>{siteTitle}</StyledLink>
        </Title>
      </nav>
    );
  };

  return (
    <StaticQuery
      query={graphql`
        query Navigation {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: Queries.NavigationQuery) => renderNavigation(data)}
    />
  );
}
