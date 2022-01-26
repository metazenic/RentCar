import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import MyReservation from "../MyReservation.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const handlePageChange = jest.fn();
  const handleSeessionStarted = jest.fn();
  const {getByTestId} = render(
   <BrowserRouter>
  <MyReservation changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />
  </BrowserRouter>)
  const containerMyReservation = getByTestId("test-container-myReservation");
  expect(containerMyReservation).toBeInTheDocument();
})