import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Location from "../Location"

global.React = React;

test("comprobar cantidad de <p>", ()=>{
    const component = render(<Location/>)
    console.log(component)
    const p = component.container.querySelectorAll("p")
    expect(p.length>=1)
})

test("comprobar cantidad de <h3>", ()=>{
    const component = render(<Location/>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(1)
})


test("comprobar renderizado del contenido de <h3>", ()=>{
    const component = render(<Location/>)
    console.log(component)
    const text = screen.getByText(/auto/)
})

