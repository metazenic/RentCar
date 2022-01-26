import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Features from "../Features"

global.React = React;

const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 1,
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


test("comprobar cantidad de <ul>", ()=>{
  const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 1,
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
    const component = render(<Features  car={item}/>)
    console.log(component)
    const ul = component.container.querySelectorAll("ul")
    expect(ul.length).toEqual(1)
})

test("comprobar cantidad de <li>", ()=>{
  const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 1,
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
    const component = render(<Features car={item}/>)
    console.log(component)
    const li = component.container.querySelectorAll("li")
    expect(li.length>=3)
}) 

test("comprobar cantidad de <h3>", ()=>{
  const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 1,
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
    const component = render(<Features car={item}/>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(1)
})


test("comprobar renderizado del contenido de <h3>", ()=>{
  const item = {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  categoria: "Familiar", 
  ciudad: "bogota",
   puntuacionPromedio: 1,
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
    const component = render(<Features car={item}/>)
    console.log(component)
    const text = screen.getByText(/comodidades/)
})
