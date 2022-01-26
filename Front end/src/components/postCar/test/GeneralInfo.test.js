import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import GeneralInfo from "../GeneralInfo";

global.React = React;

test('render content', () => {

  const handleModel = jest.fn();
  const handleCategory = jest.fn();
  const handleDirection = jest.fn();
  const handleCity = jest.fn();
  const handleDescription = jest.fn();
    const {getByTestId} = render(
   <GeneralInfo model={handleModel} category={handleCategory} direction={handleDirection} city={handleCity} description={handleDescription}/>
  )
  const containerGeneralInfo = getByTestId("test-container-generalInfo");
  expect(containerGeneralInfo).toBeInTheDocument();
})