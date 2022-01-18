import styled from "styled-components";
import { lightTheme, mediaQueries } from "../organisms/Themes";
import { NavLink } from "react-router-dom";
const LogoComponent = () => {
  return (
    <Box>
      <Logo to="/">
        <H1>Clock Angle Calculator</H1>
      </Logo>
    </Box>
  );
};

export default LogoComponent;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;
const Logo = styled(NavLink)``;
const H1 = styled.h1`
  color: ${lightTheme.text};
  font-family: "Pacifico", cursive;
  padding: 10px;
  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;
