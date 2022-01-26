import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Copyright from "../copyright"

global.React = React; 


test('render content', () => {

const {getByTestId} = render(<Copyright />)
const containerFooter = getByTestId("test-container-copyright");
expect(containerFooter).toBeInTheDocument();
})