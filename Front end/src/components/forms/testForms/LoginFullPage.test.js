import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import LoginFullPage from "../LoginFullPage"
import { BrowserRouter} from "react-router-dom";


global.React = React; 

test('render content', () => {
  const handleChangePage = jest.fn();
  const handleSetSessionStarted = jest.fn();

  const {getByTestId} = render(
    <BrowserRouter>
      <LoginFullPage  changePage={handleChangePage} setSessionStarted={handleSetSessionStarted} >
      </LoginFullPage>
    </BrowserRouter>
  )
  const containerLoginFullPagel = getByTestId("test-container-LoginFullPage");
  expect(containerLoginFullPagel).toBeInTheDocument();
})