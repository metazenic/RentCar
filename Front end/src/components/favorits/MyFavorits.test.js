import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import MyFavorits from "./MyFavorits.jsx";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {

  const {getByTestId} = render(
   <BrowserRouter>
  <MyFavorits />
  </BrowserRouter>)
  const containerMyFavorits = getByTestId("test-container-myFavorits");
  expect(containerMyFavorits).toBeInTheDocument();
})
test('render  Mis Favoritos', () => {

render(
   <BrowserRouter>
  <MyFavorits />
  </BrowserRouter>)
const title = screen.getByText(/Mis Favoritos/i);
expect(title).toBeInTheDocument();
})
test('render  Aún no has agregado ningún auto a tu lista de favoritos', () => {

render(
   <BrowserRouter>
  <MyFavorits />
  </BrowserRouter>)
const subTitle = screen.getByText(/Aún no has agregado ningún auto a tu lista de favoritos/i);
expect(subTitle).toBeInTheDocument();
})
