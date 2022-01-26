import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Policies from "../Policies";

global.React = React; 

test('render content', () => {

  const handleHygiene = jest.fn();
  const handleInsurance = jest.fn();
  const handleCancelation = jest.fn();
  const {getByTestId} = render(
     <Policies hygiene={handleHygiene} insurance={handleInsurance} cancelation={handleCancelation} />
  )
  const containerPolicies = getByTestId("test-container-policies");
  expect(containerPolicies).toBeInTheDocument();
})

test('render Políticas del producto', () => {

  const handleHygiene = jest.fn();
  const handleInsurance = jest.fn();
  const handleCancelation = jest.fn();
  render(
     <Policies hygiene={handleHygiene} insurance={handleInsurance} cancelation={handleCancelation} />
  )
  const title = screen.getByText(/Políticas del producto/i);
  expect(title).toBeInTheDocument();
})