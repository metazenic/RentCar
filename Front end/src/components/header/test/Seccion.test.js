import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import User from "../sesion.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const name = ["sds","sds","dsd"] ;
  const {getByTestId} = render(
   <BrowserRouter>
  <User name={name}/>
  </BrowserRouter>)
  const containerUser = getByTestId("test-container-user");
  expect(containerUser).toBeInTheDocument();
})