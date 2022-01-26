import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import InputCharacteristics from "../InputCharacteristics";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {
  const id = 1;
  const required = true;
  
  const {getByTestId} = render(
   <BrowserRouter>
  <InputCharacteristics id ={id} required={required}/>
  </BrowserRouter>)
  const containerInputCharacteristics = getByTestId("test-container-inputCharacteristics");
  expect(containerInputCharacteristics).toBeInTheDocument();
})

test('render content false', () => {
  const id = 1;
  const required = false;
  
  const {getByTestId} = render(
   <BrowserRouter>
  <InputCharacteristics id ={id} required={required}/>
  </BrowserRouter>)
  const containerInputCharacteristics = getByTestId("test-container-inputCharacteristics");
  expect(containerInputCharacteristics).toBeInTheDocument();
})