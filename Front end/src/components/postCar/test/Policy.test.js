import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Policy from "../Policy";

global.React = React; 

test('render content', () => {
  const policy = "asdad";
  const title = "sdgsgs";
  const {getByTestId} = render(
    <Policy title={title} policy={policy}/>
    )
  const containerPolicy = getByTestId("test-container-policy");
  expect(containerPolicy).toBeInTheDocument();
})