import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render, screen} from '@testing-library/react';
import HamburgerMenu from "../HamburgerMenu.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {
  const location = "asdadas";
  const userName = "asdada";
  const sessionStart = true;

  const {getByTestId} = render(
    <BrowserRouter>
    <HamburgerMenu name={userName}  sessionStarted = {sessionStart} location={location}/>
    </BrowserRouter>)
  const containerHamburgerMenu = getByTestId("test-container-HamburgerMenu");
  expect(containerHamburgerMenu).toBeInTheDocument();
})

test('render content session false', () => {
  const location = "asdadas";
  const userName = "asdada";
  const sessionStart = false;

  const {getByTestId} = render(
    <BrowserRouter>
    <HamburgerMenu name={userName}  sessionStarted = {sessionStart} location={location}/>
    </BrowserRouter>)
  const containerHamburgerMenu = getByTestId("test-container-HamburgerMenu");
  expect(containerHamburgerMenu).toBeInTheDocument();
})

test ('click button', () =>{
  const handleClick = jest.fn();
  const location = "asdadas";
  const userName = "asdada";
  const sessionStart = true;
  render (
    <BrowserRouter>
    <HamburgerMenu name={userName}  sessionStarted = {sessionStart} location={location} handleClick={handleClick}/>
    </BrowserRouter>)
  fireEvent.click(screen.getByTestId("test-container-HamburgerMenu"));
  expect(handleClick).toBeCalled();

})

