import styled from "styled-components";
import * as React from "react";
import { mediaQueries } from "../organisms/Themes";
import PropTypes from "prop-types";

const ClockSvg = (props) => {
  return (
    <Box minute={props.minute} second={props.second} hour={props.hour}>
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" />
        <g className="marks">
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
        </g>
        <line x1="0" y1="0" x2="9" y2="0" className="hour" />
        <line x1="0" y1="0" x2="13" y2="0" className="minute" />
        <line x1="0" y1="0" x2="16" y2="0" className="seconds" />
        <circle cx="20" cy="20" r="0.7" className="pin" />
        <text x="-7" y="3" className="anjanaText">
          Made with 💕 By Anjana
        </text>
      </svg>
    </Box>
  );
};

ClockSvg.propTypes = {
  minute: PropTypes.string,
  second: PropTypes.number,
  hour: PropTypes.string,
};
ClockSvg.defaultProps = {
  minute: "0",
  second: 0,
  hour: "12",
};
export default ClockSvg;

const Box = styled.div`
  svg {
    width: 300px;
    ${mediaQueries(40)`
    width: 200px;
  `};
    ${mediaQueries(25)`
    width: 150px;
  `};
    fill: ${(props) => props.theme.body};
    stroke: rgb(91, 164, 164);
    stroke-width: 0.6;
    stroke-linecap: round;
    transform: rotate(-90deg);
  }
  .marks {
    transform: translate(20px, 20px);
    stroke-width: 0.2;
    stroke: black;
  }
  .marks > line:nth-child(1) {
    /* There are 12 marks, so we rotate by 30deg (12 * 30 = 360) */
    transform: rotate(30deg);
  }
  .marks > line:nth-child(2) {
    transform: rotate(calc(2 * 30deg));
  }
  .marks > line:nth-child(3) {
    transform: rotate(calc(3 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(4) {
    transform: rotate(calc(4 * 30deg));
  }
  .marks > line:nth-child(5) {
    transform: rotate(calc(5 * 30deg));
  }
  .marks > line:nth-child(6) {
    transform: rotate(calc(6 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(7) {
    transform: rotate(calc(7 * 30deg));
  }
  .marks > line:nth-child(8) {
    transform: rotate(calc(8 * 30deg));
  }
  .marks > line:nth-child(9) {
    transform: rotate(calc(9 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(10) {
    transform: rotate(calc(10 * 30deg));
  }
  .marks > line:nth-child(11) {
    transform: rotate(calc(11 * 30deg));
  }
  .marks > line:nth-child(12) {
    transform: rotate(calc(12 * 30deg));
    stroke-width: 0.5;
  }
  .seconds,
  .minute,
  .hour {
    transform: translate(20px, 20px) rotate(0deg);
  }
  .seconds {
    stroke-width: 0.4;
    stroke: red;
    transform: translate(20px, 20px)
      rotate(calc(${(props) => props.second} * 6deg));
  }
  .minute {
    stroke: ${(props) => props.theme.text};
    stroke-width: 0.7;
    transform: translate(20px, 20px)
      rotate(calc(${(props) => props.minute} * 6deg));
  }
  .hour {
    stroke-width: 1.1;
    stroke: ${(props) => props.theme.text};
    transform: translate(20px, 20px)
      rotate(calc(${(props) => props.hour} * 30deg));
  }
  .pin {
    stroke: red;
    stroke-width: 0.3;
  }
  .anjanaText {
    font-size: 1.5px;
    font-family: sans-serif;
    transform: translate(14px, 19px) rotate(90deg);
    fill: ${(props) => props.theme.green};
    stroke: none;
  }
`;
