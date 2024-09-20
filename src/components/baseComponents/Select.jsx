const Select = ({ label, name, value, onChange, options, width = '15rem ', height = 'auto' }) => {
    return (
        <div className="mb-4" style={{ width, height }}>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>{label}</label>}
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;