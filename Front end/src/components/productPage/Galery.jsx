import "./styles/galery.css";
import ImageViewer from "./ImageViewer";


export default function Galery({car}) {

     return (
        <>
        <div className="galery" data-testid="test-container-galery">
            <div className="galery__container">
                <div className="slider__galery">
                    {car.imagenes.map((e,i)=><div className={`img a${i}`}><img src={e.url} alt="auto vista completa" /></div>)}
                    <ImageViewer car={car}/>
                </div>
                <span className="cuenta"></span>
            </div>
        </div>
        </>
    )
}