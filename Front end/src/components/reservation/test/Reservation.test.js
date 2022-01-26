import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import Reservation from '../Reservation';
import { BrowserRouter} from "react-router-dom";


global.React = React; 

test('render content', () => {

const {getByTestId} = render(<BrowserRouter><Reservation /></BrowserRouter>)
const containerReservation = getByTestId("test-container-reservation");
expect(containerReservation).toBeInTheDocument();
})

test("comprobar cantidad de <h3>", ()=>{
    render(<BrowserRouter><Reservation /></BrowserRouter>)
    const title = screen.getByText(/Completa tus datos/i);
    expect(title).toBeInTheDocument();
})