import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import BlockMap from "../BlockMap"

global.React = React;

export const item =  {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  ciudad: {
    coordenadas: "dad"
  },
  puntuacionPromedio: 10,
  categoria: [
    {
      id: 1,
      titulo: "maleta",
      icono: "fafa"
    },
    {
      id: 2,
      titulo: "perro",
      icono: "fafafa"
    }
  ]
 
}

test('render content', () => {

  const {getByTestId} = render(<BlockMap  car={item}/>)
  const containerDropDownMenu = getByTestId("test-container-blockMap");
  expect(containerDropDownMenu).toBeInTheDocument();
})

test("comprobar cantidad de <p>", ()=>{
  
    const component = render(<BlockMap  car={item}/>)
    console.log(component)
    const p = component.container.querySelectorAll("p")
    expect(p.length>=1)
})

test("comprobar cantidad de <h3>", ()=>{
 
    const component = render(<BlockMap  car={item}/>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(1)
})


test("comprobar renderizado del contenido de <h3>", ()=>{

    const component = render(<BlockMap  car={item}/>)
    console.log(component)
    const text = screen.getByText(/Retira/);
    expect(text).toBeInTheDocument();
})
