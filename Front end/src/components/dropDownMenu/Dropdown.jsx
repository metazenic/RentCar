import { useDetectOutsideClick } from "./OutSideClick";
import React, { useRef, useEffect, useState } from "react";
import Style from "../header/style.module.css";
import { Link } from "react-router-dom";
import "./styles/dropDownLogo.css"

export default function Dropdown(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const [id, setId ] = useState("");
   
    const user = {
        nombre: sessionStorage.getItem("nombre"),
        apellido: sessionStorage.getItem("apellido"),
        email: sessionStorage.getItem("email"),
    };

    function handleChange() {
        sessionStorage.setItem("isLoggedIn", false);
        sessionStorage.removeItem("token");
        setIsActive(!isActive)
        
    }

    useEffect(() => {
        fetch(`/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            setId(data)
            })
    }, [])


    return (
        <div data-testid="test-container-dropdown">
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger" data-testid="test-Button">
                    <div className={Style.alignIcon}>
                        <div className={Style.iconUser}>
                            <p>{(user.nombre.charAt(0) + user.apellido.charAt(0)).toUpperCase()}</p>
                        </div>
                    </div>
                    <div className={props.props.dropDown ? Style.dropDownGreetingUser : Style.greetingsUser}>
                        <p className={props.props.dropDown ? Style.dropDownNameUser : ""}>Hola,</p>
                        <p className={Style.nameUser}>{user.nombre + " " + user.apellido}</p>
                    </div>
                </button>
            </div>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to={`/${id}/myreservation`}><i className="fas fa-calendar"></i> Mis reservas</Link></li> 
                    <li><Link to={`/${id}/myfavorits`}><i className="fas fa-heart"></i> Mis favoritos</Link></li>
                    <li><Link to={`/admin`}><i class="fas fa-tools"></i> Publicar carro</Link></li>
                    <li> <Link to={'./'} className={props.dropDown ? Style.closeUser : ""} onClick={handleChange} aria-label="boton cerrar sesion"><i className="fas fa-sign-out-alt"></i> Cerrar sesión</Link></li>
                </ul>
            </nav>
        </div>
    )
}