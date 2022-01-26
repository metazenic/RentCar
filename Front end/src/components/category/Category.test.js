 import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, screen} from '@testing-library/react';
import Category from './Category';

test("render container", () => {
  const item = {
    titulo: "lujo", 
    descripcion: "20 unidades", 
    url: "https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg"
  }
  const component = render(<Category item= {item} />)
  expect(component.container).toHaveTextContent(item.titulo)
})

test("category filter click", () =>{
  const handleClick = jest.fn()
  const item = {
    titulo: "lujo", 
    descripcion: "20 unidades", 
    url: "https:www.elcarrocolombiano.com/wp-content/uploads/2020/03/20202703-NISSAN-QASHQAI-2021-PORTADA.jpg"
  }
  render(<Category item= {item} handleClickCategory= {handleClick} />)
/*   fireEvent.click(document.querySelector('[data-testid="test-data-category"]')); */
  fireEvent.click(screen.getByTestId("test-data-category"));
  expect(handleClick).toHaveBeenCalledTimes(1);
})