import Button from '@/components/baseComponents/Button';
import DateTimePicker from '@/components/baseComponents/Datepicker';
import Input from '@/components/baseComponents/Input';
import Select from '@/components/baseComponents/Select';
import cityOptions from '@/mock/cityOptions';
import { useState } from 'react';


function Register() {



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthdate: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

            <Input
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
            />

            <Input
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
            />

            <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
            />

            <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
            />

            <DateTimePicker
                label="Birthdate"
                showTime={false}
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
            />

            <Select
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={cityOptions}
            />

            <Button label="Register" onClick={handleSubmit} width="100%" />
        </div>
    );
}

export default Register;