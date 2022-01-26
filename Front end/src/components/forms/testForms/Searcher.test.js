import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Searcher from "../Searcher";
import { BrowserRouter} from "react-router-dom";

test('render content', () => {

  const handleSubmit = jest.fn()
  const {getByTestId} = render(
   <BrowserRouter>
  <Searcher  handleSubmit={handleSubmit}  />
  </BrowserRouter>)
  const containerSearcher = getByTestId("test-container-searcher");
  expect(containerSearcher).toBeInTheDocument();
})