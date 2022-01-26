import { Link, useHistory } from "react-router-dom";
import "./styles/calendar.css";
import CalendarPicker from "./CalendarPicker";
import Style from "./styles/calendarMod.module.css"
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Calendar(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);
  const [fechas,setFechas]= useState(1)
  const [persistReservationInicial, setAaaa]=useState("")
  const [persistReservationFinal, setBbbb] = useState("")
  const [fechaInicial,setFechaInicial] =useState("")
  const [fechaFinal, setFechaFinal] =useState(0)
  let detailsRef = useRef(-1000);


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  const reservation=()=> {
    window.sessionStorage.setItem("fechaInicial",parseDate(document.querySelector(".span_fechaInicial").innerText))
    window.sessionStorage.setItem("fechaFinal", parseDate(document.querySelector(".span_fechaFinal").innerText))
   
    if (window.sessionStorage.getItem("isLoggedIn") === 'false' || window.sessionStorage.getItem("isLoggedIn") === null) {
      window.sessionStorage.setItem('needLogin', props.car.id);
      
      document.getElementById("link5").click()
    }else{
      
      document.getElementById("link6").click()
    }

  }
  
  const handleClick=()=>{
    setFechas(fechas+1)
    sessionStorage.removeItem("fechaInicial")
    sessionStorage.removeItem("fechaFinal")
    detailsRef.current=detailsRef.current+1
    document.querySelector(".prueba9").style.opacity=0
}

function parseDate(date){
  if(date.length===0) return ""
  return date.substring(6)+"/"+date.substring(3,6)+date.substring(0,2)
}



const handleFechaChange=(update)=>{
  if(update[1]) document.querySelector(".prueba9").style.opacity=1
  if(update[0]) document.querySelector(".span_fechaInicial").innerText=`${(update[0].getDate())}`.padStart(2,"0")+"/"+`${(update[0].getMonth()+1)}`.padStart(2,"0")+"/"+update[0].getFullYear()
  if(update[1]) document.querySelector(".span_fechaFinal").innerText=`${(update[1].getDate())}`.padStart(2,"0")+"/"+`${(update[1].getMonth()+1)}`.padStart(2,"0")+"/"+update[1].getFullYear()
  setFechaFinal(fechaFinal+1)

}


  return (
    <div className={Style.datepicker_reserva} data-testid="test-container-calendar">
      <Link id="link5" to="/login"></Link>
      <Link id="link6" key={detailsRef} to={props.car.id+"/reservation"}></Link>
      <div className={Style.contenedor_total}>
        <div className={Style.contener_datepicker_h2}>
          <h2 className={Style.h2_datepicker_reserva}>Fechas disponibles</h2>
          <CalendarPicker key={fechas} handle={handleFechaChange}/>
        </div>
        <div className={Style.contenedor_18a7shdb}>
          <div className={Style.contenedor_cartel}>
            <div className={Style.contenedor_ahahsd7}>
              <h3 className={Style.h3_reserva}>
                Agrega tus fechas de viaje para continuar con la reserva
              </h3>
              <div className="calendarDateContainer">
                <div className="calendarDate">
                  <div className="dateSelection">
                  <span key={fechas} className="span_fechaInicial"></span>
                  <span className="prueba9" style={{opacity:0}}> - </span>
                  <span key={fechas+3} className="span_fechaFinal"></span>
                </div>
                <button onClick={handleClick}><i class="far fa-trash-alt"></i></button>
                </div>
              </div>
              <button onClick={reservation} className={Style.boton_reserva}>Iniciar reserva</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}