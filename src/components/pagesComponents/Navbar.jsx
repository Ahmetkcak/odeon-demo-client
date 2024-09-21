import Button from "../baseComponents/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user_info");

        navigate("/auth/login");
    }

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    Odeon Airlines
                </div>

                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="text-white hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/flight" className="text-white hover:text-gray-400">
                            Flights
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Hotels
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Contact
                        </a>
                    </li>
                    <li>
                        <Button label="Log Out" onClick={handleLogout} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
