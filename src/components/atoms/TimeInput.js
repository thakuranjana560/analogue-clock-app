import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
const TimeInput = ({ selected, handleChange }) => {
  const [time, setTime] = useState(selected);

  function _handleChange(e) {
    const value = e.target.value;
    let newStr;
    setTime(value);
    newStr = new String("").concat(value || "00:00");
    handleChange(newStr);
  }

  return (
    <>
      <Input value={time} onChange={_handleChange} type="time" />
    </>
  );
};

TimeInput.propTypes = {
  selected: PropTypes.any,
  handleChange: PropTypes.any,
};

export default TimeInput;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 200px;
  padding: 10px 20px;
  border: 2px solid rgb(91, 164, 164);
  border-radius: 8px;
  color: rgb(91, 164, 164);
  :focus-visible {
    outline: none;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
      brightness(95%) contrast(80%);
  }
`;
