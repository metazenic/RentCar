import Style from "./Style.module.css";
import React from "react";
import { Link } from "react-router-dom";
import useScore from "../../hooks/useScore";

export default function Card(props) {
  
  const { id, imagenes, nombre, categoria, ciudad, descripcion, puntuacionPromedio, caracteristicas, icono } = props.item;
  const { score, qualification } = useScore(puntuacionPromedio)
    
  const handleMouseLeave=(e)=>{
    if(!e.target.classList.contains("apretado")){
    e.target.classList.remove("fa-solid")
    e.target.classList.add("fa-regular")}
  }
 
  const handleClassName=()=>{
    if(props.favorites.includes(id) && window.sessionStorage.getItem("isLoggedIn")===true){
      return `fa-solid fa-heart ${Style.heart} apretado`
    }else{
      return `fa-regular fa-heart ${Style.heart}`
    }
  }

  const handleClick=(e)=>{


    if(sessionStorage.getItem("isLoggedIn")){
    fetch("/user/favoritos",  {method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token')
        },
        body: JSON.stringify({usuario:{email:sessionStorage.getItem("email")},producto:{id:id}})}).then(res=>{
          if(e.target.classList.contains("apretado")){
              e.target.classList.remove("apretado")
              e.target.classList.remove("fa-solid")
              e.target.classList.add("fa-regular")
          }else{
            e.target.classList.add("apretado")
            e.target.classList.add("fa-solid")
            e.target.classList.remove("fa-regular")
          }
        })
      }else{
        if(e.target.classList.contains("apretado")){
          e.target.classList.remove("apretado")
          e.target.classList.remove("fa-solid")
          e.target.classList.add("fa-regular")
      }else{
        e.target.classList.add("apretado")
        e.target.classList.add("fa-solid")
        e.target.classList.remove("fa-regular")
      }
    }
      }
  



  const handleMouseEnter=(e)=>{
    if(!e.target.classList.contains("fa-solid")){
    e.target.classList.remove("fa-regular")
    e.target.classList.add("fa-solid")
    }
  }


  return (
    <div className={Style.list} data-testid="test-data-card">
      <div className={Style.imgContainer}>
        <i  className={handleClassName()} onClick={(e)=>handleClick(e)}
        key={sessionStorage.getItem("isLoggedIn")}
        onMouseEnter={(e)=>handleMouseEnter(e)}
        onMouseLeave={(e)=>handleMouseLeave(e)}
        ></i>
        <img src={imagenes[0].url} alt="" className={Style.img} />
        
      </div>
      <div className={Style.content}>
        <div className={Style.punctuationCN}>
          <div>
          <h3>{categoria.titulo}</h3>
          <h2>{nombre}</h2>
          </div>
          <div className={Style.punctuationFinal}>
            <p className={Style.punctuation}>{score}</p>
            <span className={Style.valorText}>{qualification}</span>
          </div>
        </div>
        <a href={ciudad.pais} target="_blank" rel="noreferrer">
          <i className={`fas fa-map-marker-alt ${Style.mapMarker}`} ></i>
          <span className={Style.locationName}>{ciudad.nombre}</span>
          <span className={Style.showMap}>MOSTRAR EN EL MAPA</span>
        </a>
      <div className={Style.features}>
        {caracteristicas.map(icon =>(
          <i className={icon.icono} key={icon.id}>&nbsp; &nbsp;</i>
        ))}</div>
        <p className={Style.aboutMe}>{descripcion}</p>
        <Link to={`/car/${id}`} className={Style.info}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
    }
