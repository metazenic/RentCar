import React from "react";
import carsData from "../../cars.json";
import Card from "../card/Card";
import "./styles/grid.css";

export default function Grid() {
  console.log(carsData);

  return(
      <div className="container-grid">
        <h2>Recomendaciones</h2>
     <div id="template-card-list-cars" className="template-card-list">
         {carsData.map(card => {
          return <Card item = {card}  key={card}/>
        })}
    </div>
    </div>
  );
     
    
}