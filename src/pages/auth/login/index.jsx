import Button from '@/components/baseComponents/Button';
import Input from '@/components/baseComponents/Input';
import { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log('Login Submitted:', formData);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

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

            <Button label="Login" onClick={handleSubmit} width="100%" />
        </div>
    );
}

export default Login;
