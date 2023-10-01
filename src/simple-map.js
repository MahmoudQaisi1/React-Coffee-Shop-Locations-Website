import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


const cafeIcon = new Leaflet.Icon({
    iconUrl: require("./images/marker1.png"),
    iconRetinaUrl: require("./images/marker1.png"),
    iconAnchor: null,
    popupAnchor: [-0, -0],
    shadowUrl: require("./images/marker1.png"),
    shadowSize: new Leaflet.Point(30, 30),
    shadowAnchor: null,
    iconSize: new Leaflet.Point(30, 30),
    className: null
});

function MyMarker({lat, lng, name, branch, address, phone, schedule, img, scrollToLocation, index}){
    const position = [lat, lng];

    function handleMarkerClick(){
        scrollToLocation(index);
    }

    return(
        <Marker 
        position={position} 
        icon={cafeIcon} 
        eventHandlers={{
            click: handleMarkerClick,
          }}>
            <Popup className="popup-wrapper">
            <div className="popup">
                <img src={img}  alt="..."/>
                <h3>{name} - <span>{branch}</span></h3>
                <p>Address: <span>{address}</span></p>
                <p>Phone: <span>{phone}</span></p>
                <p>{schedule}</p>
            </div>
            </Popup>
        </Marker>
    );
}

export default function SimpleMap({locations, scrollToLocation}) {
  const position = [40.7128, -74.0060];
  let index = 0;
  const map = (
    <div className="map-container">
        <MapContainer className="map" center={position} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map(location =>{
                return location.branches.map((branch)  =>{
                    let current = index;
                    index++;
                    return <MyMarker
                     key={current}
                     lat={branch.lat}
                     lng={branch.lng}
                     name={location.name}
                     branch={branch.branch}
                     address={branch.address} 
                     phone={branch.phone} 
                     schedule={branch.schedule}
                     img={location.img}
                     scrollToLocation={scrollToLocation}
                     index={current}
                     /> 
                });
            })}

        </MapContainer>
    </div>
    
  );
  return map;
}