function Navbar() {
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
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
