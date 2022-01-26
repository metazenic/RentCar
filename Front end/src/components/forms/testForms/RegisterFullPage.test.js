import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import RegisterFullPage from "../RegisterFullPage";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {
  const handleSeessionStarted = jest.fn();
  const changePage = jest.fn();
  const {getByTestId} = render(
   <BrowserRouter>
  <RegisterFullPage changePage={changePage} setSessionStarted={handleSeessionStarted} />
  </BrowserRouter>)
  const containerRegisterFullPage = getByTestId("test-container-registerFullPage");
  expect(containerRegisterFullPage).toBeInTheDocument();
})