import { Link } from "react-router-dom";
import Style from "./style.module.css";

export default function logo(props) {
  return (
    <div data-testid="test-container-logo">
    <Link to="/" className={Style.logo} onClick={() => props.deleteNeedLogin()}  data-testid="test-button-logo" >
      <img src="https://grupo-2.s3.amazonaws.com/Logo/logo.png" alt="logo de la empresa" />
      <h3>Te llevamos a tu próxima aventura</h3>
    </Link>
    </div>
  );
}
