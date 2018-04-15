import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 35px;
`;

const Icon = styled.img`
  height: 130px;
`;

const DayItem = props => {
  const timestamp = props.data.dt * 1000;
  const date = moment(timestamp).format("dddd, MMM DD");
  const icon = props.data.weather[0].icon;

  return (
    <Container onClick={props.onClick}>
      <Icon src={`../images/weather-icons/${icon}.svg`} alt="Weather" />
      <h2>{date}</h2>
    </Container>
  );
};

DayItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DayItem;
