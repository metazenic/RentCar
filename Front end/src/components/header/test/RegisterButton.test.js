import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import RegisterButton from "../RegisterButton.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {

  const {getByTestId} = render(
    <BrowserRouter>
    <RegisterButton />
    </BrowserRouter>)
  const containerRegisterButton = getByTestId("test-container-RegisterButton");
  expect(containerRegisterButton).toBeInTheDocument();
})