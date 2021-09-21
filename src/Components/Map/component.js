import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import {MapContainer, Map,TileLayer ,Marker ,Popup} from "react-leaflet";
import "./component.scss";
import locationMarker from '../../images/marker-icon.png';
import { showDataOnMap } from "../Utils/component";
//  MapContainer as  MapLeaflet,
import axios from 'axios';

function Maps({ countries, casesType, center, zoom })
 {
 // const position = ["51.505", "-0.09"];
  //  console.log("countries",countries);
   const mapRef = useRef();
  //  useEffect(() => {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;

  //   if ( !map ) return;

  //   const parkIcon = new L.Icon({
  //     iconUrl: locationMarker,
  //     iconSize: [26, 26],
  //     popupAnchor: [0, -15],
  //     // shadowUrl: markerShadow,
  //     shadowAnchor: [13, 28]
  //   });

  //   const parksGeojson = new L.GeoJSON(countries, {
  //     pointToLayer: (feature, latlng) => {
  //       return L.marker(latlng, {
  //         icon: parkIcon
  //       });
  //     },
  //     onEachFeature: (feature = {}, layer) => {
  //       const { properties = {} } = feature;
  //       const { Name } = properties;

  //       if ( !Name ) return;

  //       layer.bindPopup(`<p>${Name}</p>`);
  //     }
  //   });

  //   parksGeojson.addTo(map);
  // }, [])

  
  return (
    <div className="map">
       <MapContainer
        ref={mapRef}
        center={center} 
        zoom={zoom}
        >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       {showDataOnMap(countries, casesType)}
     </MapContainer>
       </div>
  );
}

export default Maps;