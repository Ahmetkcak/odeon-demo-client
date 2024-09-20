import Button from '@/components/baseComponents/Button';
import Input from '@/components/baseComponents/Input';
import { useState } from 'react';
import { loginUser } from '@/api/user';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            await loginUser(formData);
            toast.success("Login Successfully");
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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

            <Button
                label={loading ? 'Logging in...' : 'Login'}
                onClick={handleSubmit}
                width="100%"
                disabled={loading}
            />
        </div>
    );
}

export default Login;