import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Characteristics from "../Characteristics";

global.React = React; 

test('render content', () => {

  const {getByTestId} = render(

  <Characteristics />
  )
  const containerCharacteristics = getByTestId("test-container-characteristics");
  expect(containerCharacteristics).toBeInTheDocument();
})

test('render Agregar características', () => {

render(
   <Characteristics />
)
  const title = screen.getByText(/Agregar características/i);
  expect(title).toBeInTheDocument();
})