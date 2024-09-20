const Button = ({ label, onClick, disabled, width = 'auto', height = 'auto' }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{ width, height }}
            className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:shadow-outline ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
        >
            {label}
        </button>
    );
};

export default Button;