import React, { Component } from "react";
import PropTypes from "prop-types";
import DayItem from "./DayItem";
import { convertTemp } from "../utils/helpers";

class Detail extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  render() {
    const { state } = this.props.location;

    return (
      <div>
        <DayItem data={state} />
        <div>
          <p>{state.city}</p>
          <p>{state.weather[0].description}</p>
          <p>min temp: {convertTemp(state.temp.min)} degrees</p>
          <p>max temp: {convertTemp(state.temp.max)} degrees</p>
          <p>humidity: {state.humidity}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
