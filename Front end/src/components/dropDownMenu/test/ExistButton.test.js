import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import ExitButton from "../ExitButton"

global.React = React; 

test('render content', () => {

const {getByTestId} = render(<ExitButton />)
const containerExitButtonl = getByTestId("test-container-exit");
expect(containerExitButtonl).toBeInTheDocument();
})

test("click button onExit", () => {
  const onExit = jest.fn()
  render(<ExitButton  onExit={onExit}/>)
  fireEvent.click(screen.getByTestId("test-onExit"));
  expect(onExit).toHaveBeenCalledTimes(1);
})