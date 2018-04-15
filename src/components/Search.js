import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
`;

class Search extends Component {
  static propTypes = {
    history: PropTypes.object,
    direction: PropTypes.string
  };

  state = { zipCode: "" };

  handleChange = e => {
    this.setState({ zipCode: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/forecast",
      search: `?city=${this.state.zipCode}`
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="St george, Utah"
          onChange={this.handleChange}
          style={{ flexDirection: this.props.direction }}
        />
        <Button type="submit">Get Weather</Button>
      </form>
    );
  }
}

export default withRouter(Search);
