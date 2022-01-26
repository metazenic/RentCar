import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Calendar from "../Calendar";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {


  const {getByTestId} = render(
   <BrowserRouter>
  <Calendar />
  </BrowserRouter>)
  const containerCalendar = getByTestId("test-container-calendar");
  expect(containerCalendar).toBeInTheDocument();
})