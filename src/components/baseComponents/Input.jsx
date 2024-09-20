
const Input = ({ label, type, name, value, onChange, placeholder, width = '15rem', height = 'auto' }) => {
    return (
        <div className="mb-4" style={{ width, height }}>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
            />
        </div>
    );
};

export default Input;