import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import DetailReservation from "../DetailReservation";
import { BrowserRouter} from "react-router-dom";


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

test('render content', () => {

const time = "12312414"
const reserva = true;
  const {getByTestId} = render(
   <BrowserRouter>
  <DetailReservation changeReservation={reserva} time={time} car={item} />
  </BrowserRouter>)
  const containerDetailReservation = getByTestId("test-container-detailReservation");
  expect(containerDetailReservation).toBeInTheDocument();
})

test("comprobar cantidad de <h3>", ()=>{
  const time = "12312414"
  const reserva = true;
  const component = render(<BrowserRouter>
  <DetailReservation changeReservation={reserva} time={time} car={item}/>
  </BrowserRouter>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(2)
})
test("comprobar renderizado del contenido de <h3>", ()=>{
     const time = "12312414"
  const reserva = true;
  const component = render(<BrowserRouter>
  <DetailReservation changeReservation={reserva} time={time} car={item}/>
  </BrowserRouter>)
    console.log(component)
    const text = screen.getByText("Detalle de la reserva")
})

test("comprobar cantidad de <p>", ()=>{
    const time = "12312414"
  const reserva = true;
  const component = render(<BrowserRouter>
  <DetailReservation changeReservation={reserva} time={time} car={item}/>
  </BrowserRouter>)
    console.log(component)
    const p = component.container.querySelectorAll("p")
    expect(p.length).toEqual(3)
})
