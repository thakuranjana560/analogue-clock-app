import React, { Suspense } from "react";
import renderer from "react-test-renderer";
import ClockPage from "./ClockPage";
it("should render clock ", () => {
  const elem = renderer
    .create(
      <Suspense fallback={<div>loading...</div>}>
        <ClockPage testTime="9:52:25 PM" />
      </Suspense>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
