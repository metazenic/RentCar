import { useState, useEffect } from "react";
import DetailReservation from "./DetailReservation";
import styles from "./styles/myReservation.module.css";
import Style from "../grid/Style.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MyReservation(props) {
    const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
    const [reservations, setReservations] = useState([]);
    const [pedido, setPedido] = useState(false)


    useEffect(() => {
        fetch("/reservas/?email=" + email)
            .then(data => data.json())
            .then(data => {
                setReservations(data);
                setPedido(true)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className={Style.containerFavorits} data-testid="test-container-myReservation">
                <div className={Style.infoGridTitles}>
                <Link to="/">
                    <i className="fas fa-chevron-left"></i>
                </Link>
                    <h2>Mis Reservas</h2>
                </div>
                <div className={Style.containerGrid}>
                    <div className={Style.templateCardList}>
                        {pedido ? (!reservations.length) ?
                            <div className={Style.containerMessage}>
                                <div className={Style.activation}>
                                    <i className="far fa-calendar"></i>
                                    <h3>Aún no has realizado ninguna reserva</h3>
                                    <br />
                                    <p>Aquí vas a poder encontrar todas tus reservas junto a la descripción del vehículo y la fecha en que la realizaste.
                                    </p>
                                    <button><Link to="/">Empezar a buscar</Link></button>
                                </div>
                            </div> :
                            <>
                                {reservations.map((reservation) => {
                                    return (
                                        <div className={styles.reservation}>
                                            <DetailReservation location="myReservation" changeReservation={[reservation.fechaInicial, reservation.fechaFinal]} time={reservation.startHour} car={reservation.producto} />
                                        </div>)
                                })}
                            </> :
                            ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}