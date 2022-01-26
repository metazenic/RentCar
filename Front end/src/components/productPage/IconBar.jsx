import ShareIcon from "./ShareIcon";
import Overlay from "react-overlay-component";
import "./styles/iconBar.css"
import { useState } from "react";
import "../productPage/styles/shareIcon.css"


export default function IconBar() {
  const [expand, setExpand] = useState(false);
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {};
  const shareUrl = "localhost:3001/car"
  const text = "Comparte este vehículo en tus redes sociales"

  return (
    <div className="iconBar" data-testid="test-container-iconBar">
      <button className="share" onClick={() => setOverlay(true)}>
        <i className="fas fa-share-alt"></i>
      </button>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <ShareIcon text={text}/>
      </Overlay>
      <button className="heart">
        <i className="fas fa-heart"></i>
      </button>
    </div>
  )
}