import PropTypes from "prop-types";
import React, { lazy } from "react";
import { Main, Title, Description } from "./Styles";
const ClockSvg = lazy(() => import("../atoms/ClockSvg"));
const TimeInput = lazy(() => import("../atoms/TimeInput"));

const Block = ({
  alignItem,
  title,
  description,
  hour,
  minute,
  second,
  selected,
  handleChange,
  angle,
}) => {
  return (
    <>
      {alignItem == "borderRight" && (
        <Main className="borderRight">
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Title>
            <TimeInput selected={selected} handleChange={handleChange} />
          </Title>
          <Description>
            Angle : <b>{angle}</b>
          </Description>
        </Main>
      )}
      {alignItem == "borderLeft" && (
        <Main className="borderLeft">
          <Title>
            <ClockSvg minute={minute} second={second} hour={hour} />
          </Title>
        </Main>
      )}
    </>
  );
};

Block.propTypes = {
  alignItem: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.node,
  hour: PropTypes.string,
  minute: PropTypes.string,
  second: PropTypes.number,
  selected: PropTypes.string,
  handleChange: PropTypes.func,
  angle: PropTypes.string,
};

export default Block;
