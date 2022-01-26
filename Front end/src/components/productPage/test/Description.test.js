import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Description from "../Description"

global.React  = React;

test("comprobar cantidad de <h3>", ()=>{
    const component = render(<Description/>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(1)
})


test("comprobar renderizado del contenido de <h3>", ()=>{
    const component = render(<Description/>)
    console.log(component)
    const text = screen.getByText("Viajá con tranquilidad");
    expect(text).toBeInTheDocument();
})

test("comprobar cantidad de <h4>", ()=>{
    const component = render(<Description/>)
    console.log(component)
    const h4 = component.container.querySelectorAll("h4")
    expect(h4.length).toEqual(2)
})

test("comprobar cantidad de <p>", ()=>{
    const component = render(<Description/>)
    console.log(component)
    const p = component.container.querySelectorAll("p")
    expect(p.length).toEqual(2)
})