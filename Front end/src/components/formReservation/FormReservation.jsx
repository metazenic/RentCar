
import Style from './Style/styleForm.module.css'
import {useEffect, useState} from 'react';


export default function FormReservation({car}) {
    const [nombre, setNombre] = useState(sessionStorage.getItem("nombre"));
    const [apellido, setApellido] = useState(sessionStorage.getItem("apellido"));
    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    
    const ciudad = car.ciudad.nombre

   

    return (
        <>
            <form className={Style.mainForm} data-testid="test-container-FormReservation">
                <div className={Style.inputContainer}>
                    <label for="name" className={Style.inputLabels} >Nombre</label>
                    <input type="text" name="name" className={Style.inputReservationDisable} value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
                </div>

                <div className={Style.inputContainer}>
                    <label for="surname" className={Style.inputLabels}>Apellido</label>
                    <input type="text" name="surname" className={Style.inputReservationDisable} value={apellido} onChange={(e)=>setApellido(e.target.value)} data-testid="test-button-lastName"></input>
                </div>

                <div className={Style.inputContainer}>
                    <label for="email" className={Style.inputLabels}>Correo Electrónico</label>
                    <input type="email" name="email" className={Style.inputReservationDisable} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div className={Style.inputContainer}>
                    <label for="ciudad" className={Style.inputLabels}>Ciudad</label>
                    <input placeholder={ciudad} name="ciudad" className={Style.inputReservation}></input>
                </div>
            </form>
        </>
    );
}