import Style from "./style.module.css"
import ShareIcon from "../productPage/ShareIcon";
import Overlay from "react-overlay-component";
import { useState } from "react";


export default function SocialMedia(props) {
  const [expand, setExpand] = useState(false);
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {};
  const shareUrl = "localhost:3001"
  const text = "Comparte este vehículo"


  return (
    <div className={props.menu ? Style.socialMediaSpecial : Style.socialMedia} data-testid="test-container-social">
      <button className="share" onClick={() => setOverlay(true)} data-testid="test-btn-overlay">
        <i className="fas fa-share-alt"></i>
      </button>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <ShareIcon text={text} />
      </Overlay>
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-linkedin-in"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  );
}
