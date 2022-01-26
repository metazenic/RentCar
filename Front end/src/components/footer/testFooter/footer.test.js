import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Footer from "../footer"


global.React = React; 

test('render content', () => {

const {getByTestId} = render(<Footer />)
const containerFooter = getByTestId("test-container-footer");
expect(containerFooter).toBeInTheDocument();
})