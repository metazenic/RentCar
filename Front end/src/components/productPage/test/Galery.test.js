import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Galery from "../Galery";
import ImageViewer from "../ImageViewer";
global.React = React;

test("comprobar cantidad de <ul>", ()=>{
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
    const component = render(<Galery car={item} />)
    console.log(component)
    const img = component.container.querySelectorAll("img")
    expect(img.length>=5)
})

test("render", ()=>{
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
  const {getByTestId} = render(<Galery car={item} />)
  const containerDropDownMenu = getByTestId("test-container-galery");
  expect(containerDropDownMenu).toBeInTheDocument();
})