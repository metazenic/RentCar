import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import ShareIcon from "../ShareIcon";
import { BrowserRouter} from "react-router-dom";

global.React = React;

test('render content', () => {
  const text ="asdsa";
  const {getByTestId} = render(
   <BrowserRouter>
  <ShareIcon text={text}/>
  </BrowserRouter>)
  const containerShareIcon = getByTestId("test-container-shareIcon");
  expect(containerShareIcon).toBeInTheDocument();
})