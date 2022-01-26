import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import ScoreBar from "../ScoreBar";

global.React = React; 

export const item =  {
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

test("debería renderizar componente ScoreBar", ()=>{
    const component = render(<ScoreBar car={item}/>)
    console.log(component)
    const text = screen.getByText("Cancelación gratis hasta 24hs antes del retiro")
})

test("comprobar cantidad de <i>", ()=>{

  const item = {
    puntuacionPromedio: 1
  }

    const component = render(<ScoreBar car={item}/>)
    console.log(component)
    const p = component.container.querySelectorAll("p")
    expect(p.length>=5)
})