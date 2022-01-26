import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Logo from "../logo.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {
  const deleteNeedLogin = jest.fn();
  const {getByTestId} = render(
   <BrowserRouter>
  <Logo deleteNeedLogin={deleteNeedLogin}/>
  </BrowserRouter>)
  const containerLogo = getByTestId("test-container-logo");
  expect(containerLogo).toBeInTheDocument();
})

test("click button", () => {
  const deleteNeedLogin = jest.fn()
   render(
   <BrowserRouter>
  <Logo deleteNeedLogin={deleteNeedLogin}/>
  </BrowserRouter>)
  fireEvent.click(screen.getByTestId("test-button-logo"));
  expect(deleteNeedLogin).toHaveBeenCalledTimes(1);
})

test('render Revisa tu correo', () => {

  const deleteNeedLogin = jest.fn()
  render(
   <BrowserRouter>
  <Logo deleteNeedLogin={deleteNeedLogin}/>
  </BrowserRouter>)
  const title = screen.getByText(/Te llevamos a tu próxima aventura/i);
  expect(title).toBeInTheDocument();
})