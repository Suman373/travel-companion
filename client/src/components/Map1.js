import React, {useRef, useEffect, useState} from 'react';
import Map, {Marker,Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import "../styles/Review.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import details from "../assets/General"
import LocationOnIcon from '@mui/icons-material/LocationOn';

import 'maplibre-gl/dist/maplibre-gl.css';
import Form from './Form';
import Review from './Review';

import { useNavigate } from 'react-router-dom';

function App() {
  const [Tags, setTags] = useState([])
  const [Username, setUsername] = useState(window.localStorage.getItem("user"));
  const [Place, setPlace] = useState(null);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: details.latitude,
    longitude: details.longitude,
    zoom: details.zoom,
  });

  const handleAddClick = (e) => {
    const {lng, lat} = e.lngLat;
    setPlace({
      lat: lat,
      long: lng
    });
    console.log({ Place ,Tags});
  };

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };


  useEffect(() => {
    // setUsername("Hello")
    const getTags = async () => {
    
        const res = await fetch("/tags")
        const data = await res.json();
        setTags(data);
      
      
    };
    getTags();
  }, []);


const handleLogout = () => {
    setUsername(null);
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("islogin");
  };

    const navigate = useNavigate();

  return (
    <Map
      initialViewState={{
        latitude: details.latitude,
        longitude: details.longitude,
        zoom: details.zoom
      }}
      
      mapLib={maplibregl}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={details.mapStyle}
      onClick={handleAddClick}
    >
      <ArrowBackIcon color='black' className='backButton' onClick={()=>{navigate("/")}} />
      {Tags.map( p => (
        <>
        <Marker key={p._id + 1} mapStyle={details.mapStyle} mapLib={maplibregl} longitude={p.coordinates.long} latitude={p.coordinates.lati}  >
          <LocationOnIcon style={{ fontSize: viewport.zoom * 7, color:
                    Username === p.username ? "red" : "slateblue",
                  cursor: "pointer", }} onClick={() => handleMarkerClick(p._id, p.lat, p.long)} />
        </Marker>
        {p._id === currentPlaceId && (
            <Popup key={p._id} longitude={p.coordinates.long} latitude={p.coordinates.lati}
              anchor="left" closeButton={true}
                closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}>
              <Form p={p} />
            </Popup>
          )
          }
          </>
      ))}

      {Place && (
          <>
            <Marker
              latitude={Place.lat}
              longitude={Place.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <LocationOnIcon style={{ fontSize: viewport.zoom * 7, color:
                   "red",
                  cursor: "pointer", }}
              />
            </Marker>
            <Popup
              latitude={Place.lat}
              longitude={Place.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setPlace(null)}
              anchor="left"
            >
            <Review Username={Username} Place={Place} setPlace={() => setPlace()} setTags={() => setTags()} Tags={ Tags} />
            
            </Popup>
          </>
      )}
      
      {Username ? (
          <button className="button logout" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className="buttons">
            <button className="button login" onClick={()=>{navigate("/login")}}>
              Log in
            </button>
            <button
              className="button register"
              onClick={()=>{navigate("/register")}}
            >
              Register
            </button>
          </div>
        )}
        {/* {showRegister && <RegisterForm setShowRegister={setShowRegister} />}
        {showLogin && (
          <LoginForm
            setShowLogin={setShowLogin}
            setUsername={setUsername}
            myStorage={window.localStorage}
          />
        )} */}


    </Map>
  );
}

export default App;