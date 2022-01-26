import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import CalendarPicker from "../CalendarPicker";
import { BrowserRouter} from "react-router-dom";

test('render content', () => {
  const fechas = [12333,2333];
  const {getByTestId} = render(
   <BrowserRouter>
  <CalendarPicker fechas={fechas} key={fechas}/>
  </BrowserRouter>)
  const containerCalendarPicker = getByTestId("test-container-calendarPicker");
  expect(containerCalendarPicker).toBeInTheDocument();
})