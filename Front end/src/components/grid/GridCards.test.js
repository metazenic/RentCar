 import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import GridCards from "./GridCards";
import { BrowserRouter} from "react-router-dom";

export const gridData = [
  {
    "id":1,
    "nombre":"Reanult Sandero",
    "descripcion":"Norwegian ",
    "puntuacionPromedio":0.0,
    "categoria":{
      "id":2,
      "titulo":"Familiar",
      "descripcion":"50 unidades disponibles",
      "url":"url",
      "productos":null
    },
    "imagenes":[
      {
        "id":1,
        "titulo":null,
        "url":"url1",
        "producto":null
      }
    ],
    "ciudad":{
      "id":1,
      "nombre":"Buenos Aires",
      "pais":"pais",
      "productos":null
    },
    "caracteristicas":[]
  },
];

test("render container", () => {
  const {getByTestId} = render(<BrowserRouter><GridCards gridData={gridData} isFetching={false}  /></BrowserRouter>)
  const containerGrid = getByTestId("test-container-grid");
  expect(containerGrid).toBeInTheDocument();
})

test("render container with spinner", () => {
  const {getByTestId} = render(<BrowserRouter><GridCards gridData={gridData} isFetching={true}  /></BrowserRouter>)
  const spinner = getByTestId("test-spinner");
  expect(spinner).toBeInTheDocument();
})

test("click button reset", () => {
  const handleClick = jest.fn()
  render(<BrowserRouter><GridCards gridData={gridData} isFetching={true} resetFilter={handleClick} /></BrowserRouter>)
  fireEvent.click(screen.getByTestId("test-reset"));
  expect(handleClick).toHaveBeenCalledTimes(1);
})

