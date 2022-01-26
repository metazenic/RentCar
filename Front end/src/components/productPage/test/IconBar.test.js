import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import IconBar from "../IconBar";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
   <BrowserRouter>
  <IconBar />
  </BrowserRouter>)
  const containerIconBar = getByTestId("test-container-iconBar");
  expect(containerIconBar).toBeInTheDocument();
})