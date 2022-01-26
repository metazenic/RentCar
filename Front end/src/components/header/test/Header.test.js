import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Header from "../header.jsx";
import { BrowserRouter} from "react-router-dom";


global.React = React; 

test('render content', () => {
  const name = "asdadas";
  const page = "asdada";
  const sessionStarted = true;

  const {getByTestId} = render(
   <BrowserRouter>
  <Header sessionStart={sessionStarted} location={page} userName={name} />
  </BrowserRouter>)
  const containerHeader = getByTestId("test-container-header");
  expect(containerHeader).toBeInTheDocument();
})
test('render content false', () => {
  const name = "asdadas";
  const page = "asdada";
  const sessionStarted = false;

  const {getByTestId} = render(
   <BrowserRouter>
  <Header sessionStart={sessionStarted} location={page} userName={name} />
  </BrowserRouter>)
  const containerHeader = getByTestId("test-container-header");
  expect(containerHeader).toBeInTheDocument();
})