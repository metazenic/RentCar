import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Spinner from "./Spinner"

global.React = React;

test('render content', () => {
    const handleSetSessionStarted = jest.fn();
 
  const {getByTestId} = render(<Spinner setSessionStarted={handleSetSessionStarted}>
  </ Spinner> )
  const containerSpinner = getByTestId("test-container-spinner");
  expect(containerSpinner).toBeInTheDocument();
})