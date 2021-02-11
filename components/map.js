import GoogleMapReact from "google-map-react";

function Map(props) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyB1lJ20tJekKJExnzBj7r9pr1sn1UqsYhI"}}
      defaultCenter={[
        props.mapLat,
        props.mapLng,
      ]}
      defaultZoom={15}
    >
      <Marker lat={props.mapLat} lng={props.mapLng} text=""/>
    </GoogleMapReact>
  );
}

function Marker({ text }) {
    return <p className="bg-red-500 rounded-full w-5 h-5">{text}</p>
}

export default Map;