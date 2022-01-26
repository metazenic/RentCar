import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Login from "../Login"
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {
    const handleSetSessionStarted = jest.fn();
 
  const {getByTestId} = render(
    <BrowserRouter>
     <Login setSessionStarted={handleSetSessionStarted}></Login>
    </BrowserRouter>
  )
  const containerLogin = getByTestId("test-container-login");
  expect(containerLogin).toBeInTheDocument();
})
test('render Iniciar sesión text', () => {
    const handleSetSessionStarted = jest.fn();
 render(
    <BrowserRouter>
     <Login setSessionStarted={handleSetSessionStarted}></Login>
    </BrowserRouter>
  )
const btnTitle = screen.getByRole('button', {name : /Iniciar sesión/i} );
expect(btnTitle).toBeInTheDocument();
})