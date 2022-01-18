import styled from "styled-components";
import { lazy, useState, useEffect } from "react";
import { mediaQueries } from "../components/organisms/Themes";
import PropTypes from "prop-types";
//Components
const LogoComponent = lazy(() => import("../components/atoms/LogoComponent"));
const Block = lazy(() => import("../components/molecules/Block"));

const ClockPage = (testTime) => {
  const [time, setTime] = useState(
    testTime.length !== undefined ? testTime : new Date().toLocaleTimeString()
  );
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  const [hour, setHours] = useState(0);
  const [minuteAngle, setMinutesAngle] = useState(0);
  const [hourAngle, setHourAngle] = useState(0);
  const [inputHour, setInputHours] = useState(0);
  const [inputMinute, setInputMinute] = useState(0);

  useEffect(() => {
    updateHands();
  }, [time]);

  const updateHands = () => {
    // time format from Date is 9:52:25 PM and fom input box  is this 04:05
    const sec = parseInt(time.split(":")[2]) || 0;
    const min = parseInt(time.split(":")[1]) + sec / 60;
    const hr = parseInt(time.split(":")[0]) + min / 60;
    setSeconds(sec);
    setMinutes(min);
    setHours(hr);
    convertTimeFrom12To24(time);
    setMinutesAngle((min * 6) % 360);
    setHourAngle((hr * 30) % 360);
  };

  const convertTimeFrom12To24 = (time) => {
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    if (time.match(/\s(.*)$/)) {
      const AMPM = time.match(/\s(.*)$/)[1];
      if (AMPM.toLowerCase() === "pm" && hours < 12) hours = hours + 12;
      if (AMPM.toLowerCase() === "am" && hours == 12) hours = hours - 12;
    }
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    setInputHours(sHours);
    setInputMinute(sMinutes);
  };

  const getAngle = () => {
    const ans = Math.abs(hourAngle - minuteAngle);
    return Math.round(Math.min(360 - ans, ans)) + "°";
  };

  return (
    <>
      <LogoComponent theme="light" />
      <Box>
        <Block
          alignItem="borderRight"
          title="Calculate Angle for clock 🙌"
          description={
            <>
              Select Time to calculate the angle{" "}
              <b className="green">(in degrees) </b>between the hour hand and
              the minute hand of clock
            </>
          }
          selected={inputHour + `:` + inputMinute}
          handleChange={(val) => {
            setTime(val);
          }}
          angle={getAngle()}
        />
        <Block
          alignItem="borderLeft"
          minute={minute}
          second={second}
          hour={hour}
        />
      </Box>
    </>
  );
};

ClockPage.propTypes = {
  testTime: PropTypes.string,
};
export default ClockPage;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction:column;  
    height:auto;
    &>*:nth-child(5){
      margin-bottom:5rem;
    }
  `};
  ${mediaQueries(30)`           
    &>*:nth-child(5){
      margin-bottom:4rem;
    }
  `};
`;
