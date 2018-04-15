import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  background: rgba(252, 90, 44, 0.89);

  color: #fff;
  text-align: left;
`;

const Nav = props => {
  return (
    <Container>
      <h1>Clever Title</h1>
      <Search direction="flex" />
    </Container>
  );
};

export default Nav;
