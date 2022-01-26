import { Link } from "react-router-dom";
import Style from "./styles/errorPage.module.css"

export default function ErrorPage(props){

    if (props.validation === false) {
        return(
             <div className={Style.error}>
                <h2 className={Style.title}>¡Ha ocurrido un error!</h2>
                <p className={Style.text}>Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde</p>
             </div>
        )
    }else{
        return <></>
    }
}