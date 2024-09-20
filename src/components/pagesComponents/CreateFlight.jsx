import React, { useState } from 'react';
import Button from '@/components/baseComponents/Button';
import DateTimePicker from '@/components/baseComponents/Datepicker';
import Input from '@/components/baseComponents/Input';
import Select from '@/components/baseComponents/Select';
import cityOptions from '@/mock/cityOptions';

function CreateFlight() {

    const [formData, setFormData] = useState({
        departureLocation: '',
        arrivalLocation: '',
        departureDate: '',
        arrivalDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Flight Created:', formData);
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

                <Button label="Create Flight" type="submit" width="100%" />
            </form>
        </div>
    );
}

export default CreateFlight;