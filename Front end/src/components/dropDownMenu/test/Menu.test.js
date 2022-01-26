import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import DropDownMenu from "../Menu.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock
});

test('render content', () => {

  const handleClose = jest.fn()
  const {getByTestId} = render(
   <BrowserRouter>
  <DropDownMenu handleClose={handleClose} />
  </BrowserRouter>)
  const containerDropDownMenu = getByTestId("test-container-dropDownMenu");
  expect(containerDropDownMenu).toBeInTheDocument();
})
test('render content sessionStarted', () => {
  
   window.sessionStorage.setItem('nombre', JSON.stringify("true"));
   window.sessionStorage.setItem('apellido', JSON.stringify("true"));
   window.sessionStorage.setItem('email', JSON.stringify("true"))
  const handleClose = jest.fn()
  const {getByTestId} = render(
  <BrowserRouter>
  <DropDownMenu handleClose={handleClose} location={"Register"} name={"rerere"}  dropDown={"true"}/>
  </BrowserRouter>)
  const containerDropDownMenu = getByTestId("test-container-dropDownMenu");
  expect(containerDropDownMenu).toBeInTheDocument();
})

test('render content location login', () => {

  const handleClose = jest.fn()
  const {getByTestId} = render(
  <BrowserRouter>
  <DropDownMenu handleClose={handleClose} sessionStarted={"false"} location={"Register"}/>
  </BrowserRouter>)
  const containerDropDownMenu = getByTestId("test-container-dropDownMenu");
  expect(containerDropDownMenu).toBeInTheDocument();
})

test("click Close Session", () => {
  const handleCloseSession = jest.fn();
  const handleClick = jest.fn();
  const handleClick1 = jest.fn();

  render(
   <BrowserRouter>
  <DropDownMenu onClick={handleClick} sessionStarted={"true"}  handleCloseSession={handleCloseSession}/>
  </BrowserRouter>)
  fireEvent.click(screen.getByTestId("test-CloseSession"));
  expect(handleClick1).toBeCalled();
})
