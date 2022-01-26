import { Link } from "react-router-dom";
import Style from "./styles/buttons.module.css"
import { useEffect, useState } from "react";

export default function MenuButton(props) {
    const [id, setId] = useState("");
    function handleExit() {
        props.handleClose();
    }

    useEffect(() => {
        const mail = localStorage.getItem("email");
        fetch(`/user/${mail}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setId(data)
            })
    }, [])

    return (
        <>
            {props.address === "myreservation" || props.address === "myfavorits" ?
                <Link to={"/" + id + "/" + props.address} className={Style.anchor}>
                    {props.address === "myfavorits" ? "Mis favoritos" : "Mis reservas"}
                </Link> :
                <Link to={"/" + props.address} className={Style.anchor}>
                    {props.address === "login" ? "Iniciar sesión" : "Crear cuenta"}
                </Link>
            }
        </>
    );
}