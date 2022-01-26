import React from "react";
import NameBar from "../productPage/NameBar";
import Policies from "../productPage/Policies";
import DetailReservation from "./DetailReservation"
import "./styles/reservation.css"
import FormReservation from "../formReservation/FormReservation"
import DatePicker from "../formReservation/DatePicker"
import Style from '../formReservation/Style/styleForm.module.css'
import Schedule from './ScheduleReservation'
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Reservation() {
  const [reserva, setReserva] = useState([sessionStorage.getItem("fechaInicial")?new Date(sessionStorage.getItem("fechaInicial")):null,sessionStorage.getItem("fechaFinal")? new Date(sessionStorage.getItem("fechaFinal")): null]);
  const [time, setTime] = useState("");
 
  const {id} = useParams()

  // window.onload = () =>{
  //   if (window.sessionStorage.getItem("isLoggedIn") === 'false' || window.sessionStorage.getItem("isLoggedIn") === null) {
  //     window.sessionStorage.setItem('needLogin', id);
  //     window.location.replace('http://localhost:3000/login');
  //   }
  // }

  const handleReserva = (update)=>{
    setReserva(update)
  }
  
  const { info, isLoaded } = useFetch(`/Producto/buscar/${id}`);

  const handleTime = (update)=>{
    setTime(update)
  }

  useEffect(()=>{
    if (window.sessionStorage.getItem("isLoggedIn") === 'false' || window.sessionStorage.getItem("isLoggedIn") === null) {
      window.sessionStorage.setItem('needLogin', id);
      document.getElementById("link8").click()
    }
  },[])

  
  return (
   
    <>
    <div className="reservation" data-testid="test-container-reservation">
      <Link id="link8" to="/login"></Link>
      {isLoaded?
      <>
      <NameBar car={info}/>
      <div className="container_reservation">
        <div className="container_info_reservation">
          <h3 className={Style.reservationTitles}>Completa tus datos</h3>
          <FormReservation car={info}/>
          <h3 className={Style.reservationTitles}>Selecciona tu fecha de reserva</h3>
          <div className="container_calendar">
          <div className={Style.reactDatepicker}>
          <DatePicker reserva={handleReserva}/>
          </div>
          </div>
          <h3 className={Style.reservationTitles}>Tu horario de llegada</h3>
          <Schedule time={handleTime}/>
        </div>
        <div className={Style.containerReservation}>
          <DetailReservation location="reservation"  changeReservation={reserva} time={time} car={info}/>
        </div>
      </div>
      <div className="policiesContainer">
        <Policies />
      </div>
      </>
      : <Spinner/>}
      </div>
    </>
  );
}