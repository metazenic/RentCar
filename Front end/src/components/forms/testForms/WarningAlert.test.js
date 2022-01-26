import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import WarningAlert from "../WarningAlert";
import { BrowserRouter} from "react-router-dom";

global.React = React;

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock
});

test('render content empty', () => {
  const {queryByTestId} = render(
   <WarningAlert />
)
  const containerWarningAlert = queryByTestId("test-container-warningAlert");
  expect(containerWarningAlert).not.toBeInTheDocument();
})

test('render content', () => {
  window.sessionStorage.setItem('needLogin', JSON.stringify("true"));
  const {queryByTestId} = render(
   <WarningAlert />
)
  const containerWarningAlert = queryByTestId("test-container-warningAlert");
  expect(containerWarningAlert).toBeInTheDocument();
})