import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import NameBar from "../NameBar";
import { BrowserRouter} from "react-router-dom";

global.React = React; 

test('render content', () => {

  const item =  {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  ciudad: "bogota",
  puntuacionPromedio: 10,
  categoria: {
    titulo: "titulo"
  }
 
}
  const {getByTestId} = render(
   <BrowserRouter>
  <NameBar car={item} />
  </BrowserRouter>)
  const containerNameBar = getByTestId("test-container-nameBar");
  expect(containerNameBar).toBeInTheDocument();
})