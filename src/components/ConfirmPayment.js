import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';

const ORS_API_KEY = process.env.REACT_APP_ORS_API_KEY;

const ConfirmPayment = () => {
    const { state } = useLocation();
    const { pickup, dropoff, date, time } = state;

    const [coordinates, setCoordinates] = useState([]);
    const [distance, setDistance] = useState(null);
    const [fare, setFare] = useState(null);
    const [pickupCoord, setPickupCoord] = useState(null);
    const [dropoffCoord, setDropoffCoord] = useState(null);

    useEffect(() => {
        const fetchCoords = async (location) => {
            const res = await axios.get(
                `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(location)}`
            );
            return res.data.features[0].geometry.coordinates.reverse(); 
        };

        const fetchRoute = async () => {
            const [start, end] = await Promise.all([
                fetchCoords(pickup),
                fetchCoords(dropoff),
            ]);

            setPickupCoord(start);
            setDropoffCoord(end);

            const routeRes = await axios.post(
                'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
                {
                    coordinates: [[start[1], start[0]], [end[1], end[0]]],
                },
                {
                    headers: {
                        Authorization: ORS_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const dist = routeRes.data.features[0].properties.summary.distance / 1000;
            setDistance(dist.toFixed(2));
            setFare((dist * 15).toFixed(2));
            setCoordinates(routeRes.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]])); // flip for leaflet
        };

        fetchRoute();
    }, [pickup, dropoff]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Confirm Your Ride</h2>
            <p><strong>Pickup:</strong> {pickup}</p>
            <p><strong>Dropoff:</strong> {dropoff}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            {distance && fare ? (
                <>
                    <p><strong>Distance:</strong> {distance} km</p>
                    <p><strong>Total Fare:</strong> ₹{fare}</p>
                </>
            ) : <p>Calculating fare...</p>}

            {coordinates.length > 0 && (
                <MapContainer center={pickupCoord} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={pickupCoord}>
                        <Popup>Pickup: {pickup}</Popup>
                    </Marker>
                    <Marker position={dropoffCoord}>
                        <Popup>Dropoff: {dropoff}</Popup>
                    </Marker>
                    <Polyline positions={coordinates} color="blue" />
                </MapContainer>
            )}

            <button
                onClick={() => alert("Proceeding to Payment...")}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Proceed to Pay
            </button>
        </div>
    );
};

export default ConfirmPayment;
