import './App.css';
import Map,{GeolocateControl,Marker} from 'react-map-gl';

const mapboxAccessToken = process.env.MapboxAccessToken;

const value1={
  lng : 89+Math.random(),
  lat : 26+Math.random(),
}
console.log(value1)

const value2={
  lng : 89+Math.random(),
  lat : 26+Math.random(),
}

const value3={
  lng : 89+Math.random(),
  lat : 26+Math.random(),
}


function App() {
  return (
    <div className="App">
      {/* <h1>Mapbox Assignment</h1> */}
      <div className="map_container">
        <Map
            id="myMap"
            initialViewState={{
              longitude: 89.450996,
              latitude: 26.323870,
              zoom:8
            }}
            mapboxAccessToken={mapboxAccessToken}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
          <GeolocateControl/>
          <Marker longitude={value1.lng} latitude={value1.lat} />
          <Marker longitude={value2.lng} latitude={value2.lat} />
          <Marker longitude={value3.lng} latitude={value3.lat} />
        </Map>
      </div>
    </div>
  );
}

export default App;
