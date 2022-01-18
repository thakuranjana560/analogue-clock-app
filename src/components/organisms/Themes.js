export const lightTheme = {
  body: "#FFF",
  text: "black",
  green: "rgb(91, 164, 164)",
  offWhite: "rgb(255, 255, 255)",
};

// You can also use these breakpoints after importing it and use it as breakpoints.sm
export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
