import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import ImageViewer from "../ImageViewer"

test("comprobar el evento on Click", ()=>{
 const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  ciudad: "bogota",
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
    const mockHandler = jest.fn()
    const component = render(<ImageViewer onClick={mockHandler} car={item}/>)
    const button = component.getByText("Ver más")
    fireEvent.click(button)
})