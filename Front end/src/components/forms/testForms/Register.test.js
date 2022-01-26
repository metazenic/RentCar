import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Register from "../Register"
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

const {getByTestId} = render(<BrowserRouter><Register /></BrowserRouter>)
const containerRegister = getByTestId("test-container-Register");
expect(containerRegister).toBeInTheDocument();
})

test('render Crear cuenta', () => {

render(<BrowserRouter><Register /></BrowserRouter>)
const btnEl = screen.getByRole('button', {name: /Crear cuenta/i})
expect(btnEl).toBeInTheDocument();
})