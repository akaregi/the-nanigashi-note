import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Title = styled.h2`
  margin: 10vh 0;

  font-size: 1.8rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #aaa;

  &:hover {
    color: #161723;
  }

  transition: color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export function Navigation() {
  return (
    <nav>
      <Title>
        <StyledLink to={`/`}>何某ノート</StyledLink>
      </Title>
    </nav>
  );
}
