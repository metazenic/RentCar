import useFetch from "../../hooks/useFetch";
import React from "react";
import Category from "../category/Category";
import Style from "./Style.module.css";

export default function GridCategory({ handleClickCategory }) {
  const { info, isLoaded } = useFetch("/categorias/lista");

  return (
    <div className={Style.containerCategory}  data-testid="test-container-category">
      <h2>Buscar por tipo de carro</h2>
      {isLoaded ? (
        <div className={Style.containerCardCategory}>
          {info.map((category, id) => {
            return (
              <Category
                item={category}
                key={id}
                handleClickCategory={handleClickCategory}
              />
            );
          })}
        </div>
      ) : (
        <div className={Style.spinner}></div>
      )}
    </div>
  );
}
