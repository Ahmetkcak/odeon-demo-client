import { useEffect, useState } from 'react';
import Button from '@/components/baseComponents/Button';
import { getAllFlights } from '@/api/flight';
import { createReservation } from '@/api/reservation';
import { getUserInfo } from '@/hooks/getUserInfo';
import { toast } from 'react-toastify';

function FlightList() {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userInfo = getUserInfo();
    const userId = userInfo?.id ?? null;
    const city = userInfo?.city ?? null;


    useEffect(() => {
        const fetchFlights = async () => {
            const response = await getAllFlights();
            if (response.error) {
                setError(response.error);
            } else {
                setFlights(response.data);
            }
            setLoading(false);
        };

        fetchFlights();
    }, []);

    const handleReservation = async (flightId) => {
        try {
            console.log(userId, flightId)
            const response = await createReservation({ userId, flightId });
            toast.success('Reservation created successfully!');
        } catch (error) {
            console.error('Error creating reservation:', error);
            toast.error('Failed to create reservation. Please try again.');
        }
    };

    const filteredFlights = city
        ? flights.filter((flight) => flight.departureLocation.toLowerCase() === city.toLowerCase())
        : flights;

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div>Error fetching flights: {error.message}</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ring-1 ring-black shadow-lg mt-4">
            <h2 className="text-3xl font-bold text-center mb-6">Available Flights</h2>
            <ul className="space-y-4">
                {filteredFlights?.length > 0 && filteredFlights?.map((flight) => (
                    <li key={flight.id} className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                        <div className="flex-grow">
                            <strong>Departure:</strong> {flight.departureLocation} <br />
                            <strong>Arrival:</strong> {flight.arrivalLocation} <br />
                            <strong>Departure Date:</strong> {new Date(flight.departureDate).toLocaleString()} <br />
                            <strong>Arrival Date:</strong> {new Date(flight.arrivalDate).toLocaleString()}
                        </div>
                        <Button label="+" onClick={() => handleReservation(flight.id)} width="auto" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList;