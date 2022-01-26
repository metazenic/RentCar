import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import Dropdown from "../Dropdown.jsx";
import { BrowserRouter} from "react-router-dom";

test('render content', () => {

  const handleClose = jest.fn()
  const {getByTestId} = render(
   <BrowserRouter>
  <Dropdown handleClose={handleClose} />
  </BrowserRouter>)
  const containerDropdown = getByTestId("test-container-dropdown");
  expect(containerDropdown).toBeInTheDocument();
})

test('click Button', () => {

  const handleClose = jest.fn()
  const handleClick = jest.fn()
  render(
   <BrowserRouter>
  <Dropdown handleClose={handleClose} />
  </BrowserRouter>)
fireEvent.click(screen.getById("test-Button"));
expect(handleClick).toBeCalled();
})