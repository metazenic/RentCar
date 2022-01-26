import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Register from "../Register"
import { BrowserRouter} from "react-router-dom";

test('render content', () => {

const {getByTestId} = render(<BrowserRouter><Register /></BrowserRouter>)
const containerRegister = getByTestId("test-container-Register");
expect(containerRegister).toBeInTheDocument();
})