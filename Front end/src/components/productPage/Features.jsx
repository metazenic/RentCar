import "./styles/features.css"

export default function Features(props){
    return (
        <div className="features">
         <h3>¿Qué comodidades ofrece este auto?</h3>
         <div className="underline"></div>
        <ul>
            {props.car.caracteristicas.map(f=> <li><i className={f.icono}></i> {f.nombre}</li>)}
        </ul> 
        
      
        </div>
    )
}