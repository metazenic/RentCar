import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Policies from "../Policies"

global.React = React;

test("comprobar cantidad de <ul>", ()=>{
    const component = render(<Policies/>)
    console.log(component)
    const ul = component.container.querySelectorAll("ul")
    expect(ul.length).toEqual(3)
})

test("comprobar cantidad de <li>", ()=>{
    const component = render(<Policies/>)
    console.log(component)
    const li = component.container.querySelectorAll("li")
    expect(li.length>=3)
})

test("comprobar cantidad de <h3>", ()=>{
    const component = render(<Policies/>)
    console.log(component)
    const h3 = component.container.querySelectorAll("h3")
    expect(h3.length).toEqual(1)
})

test("comprobar cantidad de <h4>", ()=>{
    const component = render(<Policies/>)
    console.log(component)
    const h4 = component.container.querySelectorAll("h4")
    expect(h4.length).toEqual(3)
})
