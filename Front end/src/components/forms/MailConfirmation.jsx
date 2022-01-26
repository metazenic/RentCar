import Style from "../successPage/styles/successPage.module.css"
import { Link } from "react-router-dom";

export default function MailConfirmation() {
    return (
        <div className={Style.success} data-testid="test-container-mailConfirmation">
            <i className="far fa-envelope"></i>
            <h2>Revisa tu correo</h2>
            <p className={Style.text}>Te enviamos un mail para que valides tu cuenta</p>
            <Link to="/login">
                <input className={Style.button} type="submit" value="ok" />
            </Link>
        </div>
    )
}