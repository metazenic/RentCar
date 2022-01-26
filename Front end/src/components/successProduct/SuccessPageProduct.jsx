import { Link } from "react-router-dom";
import Style from "../successPage/styles/successPage.module.css"

export default function SuccessPageProduct(props){

    if (props.validation) {
        return(
             <div className={Style.success}>
                <img className={Style.check} src="https://grupo-2.s3.amazonaws.com/Logo/Check.png" alt="Check" />
                <h3 className={Style.textProduct}>Tu carro se ha creado con éxito.</h3>
                <Link to="/">
                    <input className={Style.button} type="submit" value="Volver"/>
                </Link>
             </div>
        )
    }else{
        return <></>
    }
}