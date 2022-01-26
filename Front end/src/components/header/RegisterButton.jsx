import Style from "./style.module.css"
import { Link } from "react-router-dom";

export default function RegisterButton(props) {
  return (
    <Link to="/register" className={Style.button} data-testid="test-container-RegisterButton">
      Crear cuenta
    </Link>
  );
}
