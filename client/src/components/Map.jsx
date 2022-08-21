import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import '../styles/Map.css';

// const API_KEY = rs4WYDEGqgPJzgavSd8v;

const Map = ()=>{
    const mapContainer = useRef(null); // ref for container
    const map = useRef(null); // ref for the map
    const [lng] = useState(78.9629);
    const [lat] = useState(20.5937);
    const [zoom] = useState(8);
    const [API_KEY] = useState('rs4WYDEGqgPJzgavSd8v');

    // when mounted on DOm
    useEffect(()=>{
        if(map.current) return ; // not more than once
        // init the map
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center:[lng,lat],
            zoom:zoom
        });
        // add control
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({ color:"#1515a1"})
            .setLngLat([lng,lat])
            .addTo(map.current)
    },[]);

    return(
        <div className="map-container">
            <main 
            ref={mapContainer}
            className="our-map">

            </main>
        <input type="text"/>
        </div>
    );
}

export default Map;