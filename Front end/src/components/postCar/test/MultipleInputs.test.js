import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import MultipleInputs from "../MultipleInputs";
import InputCharacteristics from "../InputCharacteristics.jsx"

global.React = React;

test('render content', () => {

  const {getByTestId} = render(<MultipleInputs component={InputCharacteristics} />)
  const containerMultipleInputs = getByTestId("test-container-multipleInputs");
  expect(containerMultipleInputs).toBeInTheDocument();
})
test('click button', () => {
  const addComponent = jest.fn()
  render(<MultipleInputs component={InputCharacteristics} addComponent={addComponent}/>)
fireEvent.click(screen.getByTestId("test-click-button"));
  expect(addComponent).toHaveBeenCalledTimes(1);
})

