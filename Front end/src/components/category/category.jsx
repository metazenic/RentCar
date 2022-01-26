import React from "react";
import Style from "./Style.module.css";

export default function Category ({item, handleClickCategory}) {
const {titulo, descripcion, url} = item;
  return (
      
     <div className={Style.category} onClick={(e) => handleClickCategory(titulo)} data-testid= "test-data-category">
        <img className={Style.img}
          src={url}
          alt={`foto de auto ${titulo}`}></img>
          <div className={Style.content}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
         </div>
      </div>
  );
}