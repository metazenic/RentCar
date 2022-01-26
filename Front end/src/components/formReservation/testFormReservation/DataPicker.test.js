import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import CalendarPicker from "../DatePicker";


test('render content', () => {

  const {getByTestId} = render(
  <CalendarPicker />
  )
  const containerCalendarPicker = getByTestId("test-container-calendarPicker");
  expect(containerCalendarPicker).toBeInTheDocument();
})