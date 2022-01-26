import { Link } from "react-router-dom";
import Style from "./styles/detailReservation.module.css"
import Overlay from "react-overlay-component";
import React, { useState } from "react";
import Success from "../successPage/SuccessPage";
import Error from "../successPage/ErrorPage";
import { useParams } from "react-router";

export default function DetailReservation(props) {

  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => {if(validation){document.getElementById("link7").click()}else{setOverlay(false)}};
  const [validation, setValidation] = useState(false);
  const {id}= useParams();

  const configs = {
    animate: true,
    showCloseIcon: false,
  };

  // const fechaInicial = props.changeReservation[0].getFullYear()

  function validationForm() {
    if (props.time !== "" && props.changeReservation[0] !== "" && props.changeReservation[1]!=="" && props.changeReservation[1]) {

      const dateStart = new Date(props.changeReservation[0])
      const dayStart = `${(dateStart.getDate())}`.padStart(2, "0")
      const monthStart = `${(dateStart.getMonth() + 1)}`.padStart(2, "0")
      const yearStart = dateStart.getFullYear();

      const dateFinish = new Date(props.changeReservation[1])
      const dayFinish = `${(dateFinish.getDate())}`.padStart(2, "0")
      const monthFinish = `${(dateFinish.getMonth() + 1)}`.padStart(2, "0")
      const yearFinish = dateFinish.getFullYear();

      const fechaInicial = yearStart + "-" + monthStart + "-" + dayStart
      const fechaFinal = yearFinish + "-" + monthFinish + "-" + dayFinish
      
      const reservationData = {
        startHour: props.time,
        fechaInicial,
        fechaFinal,
        usuario: {
          email: sessionStorage.getItem('email')
        },
        producto: {
          id: id
        }
      };
      fetch("/reservas/crear", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token')
        },
        body: JSON.stringify(reservationData)
      }).then(res => res.json()).then((res) => {
        
        if ((res.status) === 201) {
          setValidation(true)
          setOverlay(true);
        }else{
          setOverlay(true);
        }
        
      }).catch(err => {
        setOverlay(true);
      });
    }else{
      setOverlay(true)
    }
  }
 
  return (
    <div className={Style.detail_reservation_container} data-testid="test-container-detailReservation">
      <h3 className={Style.tittle_reservation}>Detalle de la reserva</h3>
      <div className={Style.reservation_imgInfo_container}>
        <Link id="link7" to="../"></Link>
        <div className={Style.reservation_img_container}>

          <img className={Style.reservation_img} src={props.car.imagenes[0].url} alt="" />
        </div>
        <div className={Style.info_reservation}>
          <h3>{props.car.categoria.titulo}</h3>
          <h2>{props.car.nombre}</h2>
          <div className={`scoreBar__stars  ${Style.reservation}`}>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <i className="fas fa-map-marker-alt"></i>
          <span className={Style.location_name}>{props.car.ciudad.nombre+", "+props.car.ciudad.pais}</span>
          <br /><br />
          <div className={Style.line_space}></div>
          <div className={Style.check}>
            <p>Check In</p>
            <span>{props.location ==="myReservation"? props.changeReservation[0]:props.changeReservation[0] ?
              props.changeReservation[0].getDate() + "/" + 
              (props.changeReservation[0].getMonth() === 12 ? 1 : 
              props.changeReservation[0].getMonth() + 1) + "/" + props.changeReservation[0].getFullYear() :
              " "}
            </span>
          </div>
          <div className={Style.line_space}></div>
          <div className={Style.check}>
            <p>Check Out</p>
            <span>{props.location === "myReservation"?props.changeReservation[1]:props.changeReservation[1]? 
            props.changeReservation[1].getDate() + "/" + (props.changeReservation[1].getMonth() === 12 ? 
            1 : props.changeReservation[1].getMonth() + 1) + "/" + props.changeReservation[1].getFullYear():
            " "}</span>
          </div>
          <div className={Style.line_space}></div>
          <br />
          {
            props.location === "myReservation" ? "" :
              <>
                <div>
                  <button
                    onClick={() => {
                      validationForm();
                    }} className={Style.button_reservation_confirmation}
                  >Confirmar Reserva
                  </button>
                </div>
                <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                  <Success validation={validation} />
                  <Error validation={validation} />
                </Overlay>
              </>
          }
        </div>
      </div>
    </div>
  )
}