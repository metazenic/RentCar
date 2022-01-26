import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};



export default function Map({car}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQsqWrM5bul7mngabFMVcw3akeXn1-8dg"
  })

  const center1={
    lng:Number (car.ciudad.coordenadas.split(" ")[1]),
    lat: Number(car.ciudad.coordenadas.split(" ")[0])
  }
  
// const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
      <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center1}
        zoom={13}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}
