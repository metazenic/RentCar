import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Card from './Card';
import { BrowserRouter} from "react-router-dom";

export const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 10,
  caracteristicas:  [
    {
      id: 1,
      nombre: "maleta",
      icono: "fafa"
    },
    {
      id: 2,
      nombre: "perro",
      icono: "fafafa"
    }
  ]
}

export const favorites = "id-1";

test('render content', () => {

const {getByTestId} = render(<BrowserRouter><Card  item={item}  favorites={favorites} /></BrowserRouter>)
const containerCard = getByTestId("test-data-card");
expect(containerCard).toBeInTheDocument();
})

test('render content if>3', () => {


const favorites = "id-1";
const {getByTestId} = render(<BrowserRouter><Card  item={item}  favorites={favorites} /></BrowserRouter>)
const containerCard = getByTestId("test-data-card");
expect(containerCard).toBeInTheDocument();
})

test('render content if>3.5', () => {
const item1 = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissan", 
  categoria: "Familiar", 
  ciudad: "bogota",
  puntuacionPromedio: 3.5,
  caracteristicas: [
    {
      id: 1,
      nombre: "maleta",
      icono: "fafa"
    },
    {
      id: 2,
      nombre: "perro",
      icono: "fafafa"
    }
  ]
 
}

const {getByTestId} = render(<BrowserRouter><Card  item={item1} favorites={favorites}/></BrowserRouter>)
const containerCard = getByTestId("test-data-card");
expect(containerCard).toBeInTheDocument();
})


test('render content if>4.5', () => {
const item1 = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissan", 
  categoria: "Familiar", 
  ciudad: "bogota",
  puntuacionPromedio: 4.5,
  caracteristicas: [
    {
      id: 1,
      nombre: "maleta",
      icono: "fafa"
    },
    {
      id: 2,
      nombre: "perro",
      icono: "fafafa"
    }
  ]
 
}

const {getByTestId} = render(<BrowserRouter><Card  item={item1} favorites={favorites} /></BrowserRouter>)
const containerCard = getByTestId("test-data-card");
expect(containerCard).toBeInTheDocument();
})


test('render content if>2', () => {
const item1 = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissan", 
  categoria: "Familiar", 
  ciudad: "bogota",
  puntuacionPromedio: 1,
  caracteristicas: [
    {
      id: 1,
      nombre: "maleta",
      icono: "fafa"
    },
    {
      id: 2,
      nombre: "perro",
      icono: "fafafa"
    }
  ]
 
}

const {getByTestId} = render(<BrowserRouter><Card  item={item1} favorites={favorites}/></BrowserRouter>)
const containerCard = getByTestId("test-data-card");
expect(containerCard).toBeInTheDocument();
})

