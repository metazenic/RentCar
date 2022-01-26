import React from "react";
import Card from "../card/Card";
import Style from "./Style.module.css";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";
import { useEffect } from "react";
import { useState } from "react";

export default function GridCards({ gridData, isFetching, resetFilter }) {
  // console.log(isFetching);
  // console.log(gridData.length);
const controller = new AbortController();
const [favorites, setFavorites] = useState([])

const email = sessionStorage.getItem("email")

useEffect(() => {
  if(sessionStorage.getItem("isLoggedIn")){
 fetch(`/user/favoritos/?email=${email}`)
  .then(res => res.json())
  .then(data => {
    let arr = data.map(e=>e=e.productoDto.id)
   setFavorites(arr)
   }).catch(err=>console.log(err))
}}, [])

  setTimeout(() => controller.abort(), 4000);

  const { isLoaded } = useFetch("/*");

  
  return (
    <div className={Style.containerGrid} 
    data-testid="test-container-grid">
   
      <div className={Style.infoGrid}>
        <h2>Recomendaciones</h2>
        <button onClick={(e) => resetFilter()} data-testid="test-reset" className={Style.button}>Limpiar <i class="far fa-trash-alt"></i></button>
      </div>
      {isFetching && <div className={Style.spinner} data-testid="test-spinner"></div>}
     {isLoaded ? (
      <div className={Style.templateCardList}>
        {gridData.length ===  0 ? <h1>¡Lo sentimos! No encontramos resultados para tu búsqueda</h1> : gridData.map((card) => {
          return <Card item={card} key={card.id} favorites={favorites}/>;
        })}
      </div>
        ) : (
       <div></div>
      )}  
    </div>
  );
}
