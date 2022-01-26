import "./styles/policies.css"

export default function Policies(props) {
    return (
        <div className="policies">
            <h3>Qué tienes que saber</h3>
            <div className="underline"></div>
            <div className="policies__block">
                <div className="policies__list">
                    <h4>Normas del vehículo</h4>
                    {/* <ul>{props.map(n=> <li>n</li>)}</ul>
            </div>
            <div> */}
                    <ul>
                        <li>Devolución las 24 horas</li>
                        <li>No incluye pérdida de llaves</li>
                        <li>No fumar</li>
                    </ul>
                </div>
                <div className="policies__list">
                    <h4>Salud y Seguridad</h4>
                    {/* <ul>{props.map(n=> <li>n</li>)}</ul>
            </div> 
            <div>*/}
                    <ul>
                        <li>Sello de seguridad: garantía de desinfección de los vehículos</li>
                        <li>Retiro libre de contacto</li>
                    </ul>
                </div>
                <div className="policies__list">
                    <h4>Políticas de cancelación</h4>
                    {/* <ul>{props.map(n=> <li>n</li>)}</ul>*/}
                    <ul>
                        <li>Agregá la fecha de retiro para obtener detalles de cancelación</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}