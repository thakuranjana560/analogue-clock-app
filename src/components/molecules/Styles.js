import styled from "styled-components";
import { mediaQueries } from "../organisms/Themes";

export const Main = styled.div`
  border: 5px solid ${(props) => props.theme.green};
  &.borderRight {
    border-right: none;
    display: flex;
    justify-content: center;
  }
  &.borderLeft {
    display: flex;
    justify-content: center;
    border-left: none;
  }
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.offWhite};
  width: 30vw;
  height: 50vh;
  padding: 1rem;
  z-index: 3;
  line-height: 1.5;
  ${mediaQueries(60)`
      height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
    border: 5px solid rgb(91,164,164);
    &.borderRight {
      border: 5px solid rgb(91,164,164);
      border-bottom: none;
    }
    &.borderLeft {
      border: 5px solid rgb(91,164,164);
      border-top: none;
    }
  `};
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 1vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);
  `};

  & > *:first-child {
    margin-right: 1rem;
  }
`;
export const Description = styled.label`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-align: center;
  > .bold {
    color: ${(props) => props.theme.green};
  }
  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);  
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;
