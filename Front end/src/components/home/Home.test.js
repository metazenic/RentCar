import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Home from "./Home.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {

  const handlePageChange = jest.fn()
  const handleSeessionStarted = jest.fn()
  const {getByTestId} = render(
   <BrowserRouter>
  <Home changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />
  </BrowserRouter>)
  const containerHome = getByTestId("test-container-Home");
  expect(containerHome).toBeInTheDocument();
})