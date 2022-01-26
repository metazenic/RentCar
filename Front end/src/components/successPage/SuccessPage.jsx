import { Link } from "react-router-dom";
import Style from "./styles/successPage.module.css"

export default function SuccessPage(props){

    if (props.validation) {
        return(
             <div className={Style.success}>
                <img className={Style.check} src="https://grupo-2.s3.amazonaws.com/Logo/Check.png" alt="Check" />
                <h2 className={Style.title}>¡Muchas gracias!</h2>
                <p className={Style.text}>Su reserva se ha realizado con éxito</p>
                <Link to="/">
                    <input className={Style.button} type="submit" value="ok"/>
                </Link>
             </div>
        )
    }else{
        return <></>
    }
}