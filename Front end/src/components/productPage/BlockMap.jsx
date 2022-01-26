import Map from "./Map"
import "./styles/blockMap.css"

export default function BlockMap({car}) {
    return (
        <div className="blockMap" data-testid="test-container-blockMap">
            <div className="blockMap__title">
                <h3>Retira tu auto por</h3>
            </div>
            <div className="blockMap__content">
                <div className="underline"></div>
                <p>{car.ciudad.nombre+", "+car.ciudad.pais}</p>
                <Map car={car} />
            </div>
        </div>
    )
}