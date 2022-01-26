import { Link } from "react-router-dom";
import "./styles/nameBar.css";

export default function NameBar({ car }) {

 
  return (
    
    <div className="namebar" data-testid="test-container-nameBar">
      <Link to="/">
        <i class="fas fa-chevron-left"></i>
      </Link>
     
      <div>
        <p>{car.categoria.titulo.toUpperCase()}</p>
        <h3>{car.nombre}</h3>
      </div> 
    </div>
  );
}
