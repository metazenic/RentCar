import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen, getAllByPlaceholderText} from '@testing-library/react';
import FormReservation from "../FormReservation"

global.React = React;

test('render content', () => {
  const item =  {
  id: 1,
 descripcion: 'test de renderidado',
  imagenes: ["https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg", "ssss"],
  nombre: "nissna", 
  ciudad: [
    {
nombre: "dier"
    }
  ],
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
const {getByTestId} = render(<FormReservation  car={item}/>)
const containerFormReservation = getByTestId("test-container-FormReservation");
expect(containerFormReservation).toBeInTheDocument();
})

/* it('render button last name', () => {

const {getByText, getByTestId} = render(<FormReservation />)
fireEvent.click(getByTestId("test-button-lastName"));

const lastName = getByText("apellido");
expect(lastName).toBeInTheDocument();
})

describe('input field', () =>{
  it('render correct', () =>{
    const {getByPlaceholderText} = render (
      <FormReservation />
    )
    expect(getByPlaceholderText('proe')).toBeInTheDocument();
  })
} )  */