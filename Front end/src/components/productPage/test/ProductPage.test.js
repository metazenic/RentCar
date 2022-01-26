import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import ProductPage from "../ProductPage";
import { BrowserRouter} from "react-router-dom";


global.React = React; 

test('render content', () => {

  const handlePageChange = jest.fn();
  const handleSeessionStarted = jest.fn();
  const {getByTestId} = render(
   <BrowserRouter>
  <ProductPage changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />
  </BrowserRouter>)
  const containerProductPage = getByTestId("test-container-productPage");
  expect(containerProductPage).toBeInTheDocument();
})