  import React from 'react';
  import ImageGallery from "react-image-gallery";
  // import "react-image-gallery/styles/css/image-gallery.css";
  import "./styles/imageGalery.css"

  

  
  export default function Viewer (props) {
    
    const images = props.car.imagenes.map(e=>{return {original: e.url, thumbnail: e.url}})
       return (  
      <ImageGallery 
      items={images}
      showBullets={true}
      showIndex={true}
      showThumbnails={true}
      lazyLoad={true}
      infinite={true}
      showPlayButton={false}/>
    );
  
  }