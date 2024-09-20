import { useNavigate } from "react-router-dom";
import Button from "@/components/baseComponents/Button";

function NotFound() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">404</h1>
                <h2 className="mt-4 text-2xl text-gray-800">Oops! Page Not Found.</h2>
                <p className="mt-2 text-gray-600">The page you are looking for does not exist or has been removed.</p>
                <div className="mt-2">
                    <Button label="Anasayfaya Dön" onClick={handleRedirect} />
                </div>
            </div>
        </div>
    );
}

export default NotFound;
