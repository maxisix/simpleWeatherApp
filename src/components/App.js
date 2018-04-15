import React, { Component } from "react";
import styled from "styled-components";
import Search from "./Search";
import background from "../pattern.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  background-image: url("${background}");
  background-size: cover;
`;

const Title = styled.h2`
  margin: 0 0 30px 0;

  font-size: 45px;
  color: #fff;
  font-weight: 100;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Title>Enter a City and State</Title>
        <Search direction="column" />
      </Container>
    );
  }
}

export default App;
