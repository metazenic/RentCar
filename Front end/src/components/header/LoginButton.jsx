import Style from "./style.module.css"
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="/login" className={Style.button} data-testid="test-container-LoginButton">
      Iniciar sesión
    </Link>
  );
}
