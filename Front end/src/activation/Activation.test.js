import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Activation from "./Activation.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {

  const {getByTestId} = render(
   <BrowserRouter>
  <Activation  />
  </BrowserRouter>)
  const containerActivation = getByTestId("test-container-activation");
  expect(containerActivation).toBeInTheDocument();
})