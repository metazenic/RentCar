import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Schedule from "../ScheduleReservation"

global.React = React; 

test("comprobar cantidad de <h4>", ()=>{
    const component = render(<Schedule/>)
    console.log(component)
    const h4 = component.container.querySelectorAll("h4")
    expect(h4.length).toEqual(1)
})


test("comprobar renderizado del contenido de <h3>", ()=>{
    const component = render(<Schedule/>)
    console.log(component)
    const text = screen.getByText(/horario estimado/)
})