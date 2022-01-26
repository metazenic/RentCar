import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import ExitButton from "../ExitButton"

test('render content', () => {

const {getByTestId} = render(<ExitButton />)
const containerExitButtonl = getByTestId("test-container-exit");
expect(containerExitButtonl).toBeInTheDocument();
})