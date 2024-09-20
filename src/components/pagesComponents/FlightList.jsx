import { useEffect, useState } from 'react';
import Button from '@/components/baseComponents/Button';

import React from 'react'

function FlightList() {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlights = () => {
            const fakeData = [
                {
                    id: 1,
                    departureLocation: 'Istanbul',
                    arrivalLocation: 'Ankara',
                    departureDate: '2024-09-20T10:00:00',
                    arrivalDate: '2024-09-20T11:30:00',
                },
                {
                    id: 2,
                    departureLocation: 'Izmir',
                    arrivalLocation: 'Antalya',
                    departureDate: '2024-09-21T12:00:00',
                    arrivalDate: '2024-09-21T13:30:00',
                },
                {
                    id: 3,
                    departureLocation: 'Bursa',
                    arrivalLocation: 'Istanbul',
                    departureDate: '2024-09-22T09:00:00',
                    arrivalDate: '2024-09-22T10:15:00',
                }
            ];
            setFlights(fakeData);
            setLoading(false);
        };

        fetchFlights();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div>Error fetching flights: {error.message}</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ring-1 ring-black shadow-lg mt-4">
            <h2 className="text-3xl font-bold text-center mb-6">Available Flights</h2>
            <ul className="space-y-4">
                {flights.map((flight) => (
                    <li key={flight.id} className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                        <div className="flex-grow">
                            <strong>Departure:</strong> {flight.departureLocation} <br />
                            <strong>Arrival:</strong> {flight.arrivalLocation} <br />
                            <strong>Departure Date:</strong> {new Date(flight.departureDate).toLocaleString()} <br />
                            <strong>Arrival Date:</strong> {new Date(flight.arrivalDate).toLocaleString()}
                        </div>
                        <Button label="+" onClick={() => alert(`Viewing flight ${flight.id}`)} width="auto" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList