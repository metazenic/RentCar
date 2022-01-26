import React, { useState } from "react";
import Viewer from "./ImageGallery";
import "./styles/galery.css"
import Overlay from "react-overlay-component";

export default function ImageViewer(props) {
  const [expand, setExpand] = useState(false);
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {};

  

  return (
    <>
      <div className="button__galery">
      <button 
        onClick={() => {
          setOverlay(true);
        }}
      >Ver más
      </button>
      </div>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <Viewer car={props.car}/>
      </Overlay>
    </>
  );
}