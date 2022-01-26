import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import PostCar from "../PostCar.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
    <BrowserRouter>
     <PostCar />
    </BrowserRouter>
  )
  const containerPostCar = getByTestId("test-container-postCar");
  expect(containerPostCar).toBeInTheDocument();
})

test('render Revisa tu correo', () => {

render(
    <BrowserRouter>
     <PostCar />
    </BrowserRouter>
    )
  const title = screen.getByText(/Administración/i);
  expect(title).toBeInTheDocument();
})