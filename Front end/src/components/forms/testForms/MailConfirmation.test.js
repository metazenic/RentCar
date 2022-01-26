import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import MailConfirmation from "../MailConfirmation";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
  <BrowserRouter>
  <MailConfirmation  />
  </BrowserRouter>)
  const containerMailConfirmation = getByTestId("test-container-mailConfirmation");
  expect(containerMailConfirmation).toBeInTheDocument();
})
test('render Revisa tu correo', () => {

render(
  <BrowserRouter>
  <MailConfirmation  />
  </BrowserRouter>)
  const title = screen.getByText(/Revisa tu correo/i);
  expect(title).toBeInTheDocument();
})