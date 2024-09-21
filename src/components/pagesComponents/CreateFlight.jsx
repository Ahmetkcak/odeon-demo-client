import React, { useState } from 'react';
import Button from '@/components/baseComponents/Button';
import DateTimePicker from '@/components/baseComponents/Datepicker';
import Select from '@/components/baseComponents/Select';
import cityOptions from '@/mock/cityOptions';
import { createFlight } from '@/api/flight';
import { toast } from 'react-toastify';

function CreateFlight() {
    const [formData, setFormData] = useState({
        departureLocation: '',
        arrivalLocation: '',
        departureDate: '',
        arrivalDate: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await createFlight(formData);
            if (response.status === 400 || response.status === 403) {
                toast.error(response.response.data.detail);
            }
            else {
                toast.success("New Flight Created");
            }
        } catch (err) {
            setError('Error creating flight: ' + (err.response ? err.response.data.message : err.message));
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg ring-1 ring-black shadow-lg mt-4">
            <h2 className="text-3xl font-bold text-center mb-6">Create New Flight</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Select
                    label="Departure Location"
                    name="departureLocation"
                    value={formData.departureLocation}
                    onChange={handleChange}
                    options={cityOptions}
                />

                <Select
                    label="Arrival Location"
                    name="arrivalLocation"
                    value={formData.arrivalLocation}
                    onChange={handleChange}
                    options={cityOptions}
                />

                <DateTimePicker
                    label="Departure Date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                />

                <DateTimePicker
                    label="Arrival Date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                />

                {error && <div className="text-red-500">{error}</div>}
                <Button label={loading ? "Creating..." : "Create Flight"} type="submit" width="100%" disabled={loading} />
            </form>
        </div>
    );
}

export default CreateFlight;