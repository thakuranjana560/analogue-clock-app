import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/organisms/Themes";
import Loading from "./components/atoms/Loading";

//Components
const ClockPage = lazy(() => import("./pages/ClockPage"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ClockPage />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
