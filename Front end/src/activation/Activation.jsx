import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./activation.css"

export default function Activation() {
    const [email, setEmail] = useState(window.location.href.split("=")[1]?.split("&")[0]);
    const [activationCode, setActivationCode] = useState(window.location.href.split("=").pop())
    const [active, setActive] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        if (email && activationCode) {
            fetch("/user/activation?email=" + email + "&activationCode=" + activationCode, { method: "POST" })
                .then(res => res.text()).then(res => { if (res === "La cuenta ha sido activada.") setActive(true); setError(res) })
        }
    }, [])

    return (
        <div className="contenedor_activation" data-testid="test-container-activation">
            {active ?
                <div className="activation">
                    <i class="far fa-check-circle"></i>
                    <h2>¡La cuenta ha sido activada!</h2>
                    <br/>
                    <div className="keypadButton">
                        <button><Link to="/login">Iniciar sesión</Link></button>
                        <Link to="/">Regresar a la home</Link>
                    </div>
                </div> :
                <div className="activation">
                    <i className="far fa-times-circle"></i>
                    <h2>¡Lo sentimos! Ha ocurrido un error</h2>
                    <br/>
                    <p>Es posible que ya hayas utilizado este link de activación o que haya caducado, por favor intenta crear tu cuenta nuevamente.</p>
                    <div className="keypadButton">
                        <Link to="/register">Registrarse</Link>
                        <Link to="/">Regresar a la home</Link>
                    </div>
                </div>
            }
        </div>
  );
}