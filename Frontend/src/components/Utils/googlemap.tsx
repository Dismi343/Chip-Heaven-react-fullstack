import {GoogleMap,Marker,useLoadScript} from "@react-google-maps/api";


const mapContainerStye={
    width:"1000px",
    height:"500px",
};

const center ={
    lat:7.027884727051328, 
    lng: 79.95418159066779 ,
};

const GoogleMapComponent:React.FC =()=>{
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAZjuyfNfDheyHraGjQ2UodBKgv0gIcvCQ",
    });
    if(!isLoaded) return <div>Loading .. </div>
    return(
        <GoogleMap 
            mapContainerStyle={mapContainerStye}
            zoom={8}
            center={center}
        >
        <Marker position={center}/>
        </GoogleMap>
    )
};

export default GoogleMapComponent;