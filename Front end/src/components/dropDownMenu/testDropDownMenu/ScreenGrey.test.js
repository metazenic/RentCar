import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import ScreenGray from "../ScreenGrey.jsx"


test('render content', () => {

const {getByTestId} = render(<ScreenGray />)
const containerScreenGray = getByTestId("test-container-ScreenGray");
expect(containerScreenGray).toBeInTheDocument();
})