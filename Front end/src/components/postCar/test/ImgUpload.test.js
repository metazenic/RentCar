import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import ImgUpload from "../ImgUpload";

global.React = React; 

test('render content', () => {

   const {getByTestId} = render(
  <ImgUpload  />
)
  const containerImgUpload = getByTestId("test-container-imgUpload");
  expect(containerImgUpload).toBeInTheDocument();
})

test('render Cargar imágenes', () => {

render(
  <ImgUpload  />)
  const title = screen.getByText(/Cargar imágenes/i);
  expect(title).toBeInTheDocument();
})