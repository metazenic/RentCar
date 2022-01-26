import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Keypad from "../Keypad.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
    <BrowserRouter>
      <Keypad />
    </BrowserRouter>)
  const containerKeypad = getByTestId("test-container-Keypad");
  expect(containerKeypad).toBeInTheDocument();
})