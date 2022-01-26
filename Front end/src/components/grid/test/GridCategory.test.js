import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import GridCategory from "../GridCategory";

test('render content', () => {
  const info = [
{
"id": 1,
"titulo": "Compacto",
"descripcion": "90 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Compacto.jpg"
},
{
"id": 2,
"titulo": "Familiar",
"descripcion": "50 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Familiar.jpg"
},
{
"id": 3,
"titulo": "Todo Terreno",
"descripcion": "40 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Todo+Terreno.jpg"
},
{
"id": 4,
"titulo": "Lujo",
"descripcion": "20 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Lujo.jpg"
}
]
  const handleClickCategory = jest.fn()
  const {getByTestId} = render(<GridCategory handleClickCategory={handleClickCategory}/>)
  const containerCategory = getByTestId("test-container-category");
  expect(containerCategory).toBeInTheDocument();
})

test('render Buscar por tipo de carro', () => {
  const info = [
{
"id": 1,
"titulo": "Compacto",
"descripcion": "90 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Compacto.jpg"
},
{
"id": 2,
"titulo": "Familiar",
"descripcion": "50 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Familiar.jpg"
},
{
"id": 3,
"titulo": "Todo Terreno",
"descripcion": "40 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Todo+Terreno.jpg"
},
{
"id": 4,
"titulo": "Lujo",
"descripcion": "20 unidades disponibles",
"url": "https://grupo-2.s3.amazonaws.com/Imagenes+categorias/Lujo.jpg"
}
]
  const handleClickCategory = jest.fn()
render(<GridCategory handleClickCategory={handleClickCategory}/>)
    const title = screen.getByText(/Buscar por tipo de carro/i);
  expect(title).toBeInTheDocument();
})
