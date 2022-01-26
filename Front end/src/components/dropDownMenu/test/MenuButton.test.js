import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import MenuButton from "../MenuButton.jsx"
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {
  const {getByTestId} = render(<BrowserRouter><MenuButton /></BrowserRouter>)
  const containerMenuButton = getByTestId("test-container-MenuButton");
  expect(containerMenuButton).toBeInTheDocument();
})

test('render boton', () => {
  const handleClose = jest.fn()
  render(<BrowserRouter><MenuButton  handleClose={handleClose}/></BrowserRouter>)
  fireEvent.click(screen.getByTestId("test-container-MenuButton"));
  expect(handleClose).toHaveBeenCalledTimes(1);
})