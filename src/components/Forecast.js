import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getForcast } from "../utils/api";
import qs from "query-string";
import DayItem from "./DayItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 50px auto;
`;

class Forecast extends Component {
  state = { loading: true, forecastData: [] };

  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  };

  componentWillMount() {
    this.city = qs.parse(this.props.location.search).city;

    getForcast(this.city)
      .then(response => {
        this.setState({ loading: false, forecastData: response });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = city => {
    this.props.history.push({
      pathname: `/detail/${this.city}`,
      state: city
    });
  };

  render() {
    return this.state.loading ? (
      <h1>loading</h1>
    ) : (
      <div>
        <h1>{this.city}</h1>
        <Container>
          {this.state.forecastData.list.map(data => {
            return (
              <DayItem
                onClick={this.handleClick.bind(null, data)}
                key={data.dt}
                data={data}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Forecast;
