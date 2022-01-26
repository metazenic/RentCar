import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import SocialMedia from "../socialMedia";

global.React = React;

test('render content true', () => {

const {getByTestId} = render(<SocialMedia menu={true}/>)
const containerSocial = getByTestId("test-container-social");
expect(containerSocial).toBeInTheDocument();
})



test('render content', () => {

const {getByTestId} = render(<SocialMedia />)
const containerSocial = getByTestId("test-container-social");
expect(containerSocial).toBeInTheDocument();
})