import { Link } from "react-router-dom";
import Style from "../successPage/styles/errorPage.module.css"

export default function ErrorPageProduct(props){

    if (props.validation === false) {
        return(
             <div className={Style.error}>
                <h2 className={Style.title}>¡Ha ocurrido un error!</h2>
                <p className={Style.text}>Lamentablemente el producto no ha podido crearse. Por favor, intente más tarde</p>
             </div>
        )
    }else{
        return <></>
    }
}