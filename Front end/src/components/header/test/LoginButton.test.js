import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import LoginButton from "../LoginButton.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {

  const {getByTestId} = render(
   <BrowserRouter>
  <LoginButton />
  </BrowserRouter>)
  const containerLoginButton = getByTestId("test-container-LoginButton");
  expect(containerLoginButton).toBeInTheDocument();
})