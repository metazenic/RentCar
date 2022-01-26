import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import App from "./App";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
   <BrowserRouter>
  <App  />
  </BrowserRouter>)
  const containerApp = getByTestId("test-container-app");
  expect(containerApp).toBeInTheDocument();
})