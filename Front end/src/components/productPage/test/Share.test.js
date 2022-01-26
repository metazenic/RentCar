import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Share from "../Share"

test("comprobar si renderiza el componente Share", ()=>{
    const style = {
        content: {
            justifyContent: "center",
            background: '#ffffff',
            borderRadius: 3,
            border: 0,
            color: '#263238',
            padding: '0 30px',
            width: "20rem",
            height: "10rem",
            textAlign: "center",
        }
    }
    const component = render(<Share content={style}/>)
    console.log(component)
})
