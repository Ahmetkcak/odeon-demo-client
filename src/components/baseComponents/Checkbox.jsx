const Checkbox = ({ label, name, checked, onChange, width = 'auto', height = 'auto' }) => {
    return (
        <div className="flex items-center mb-4" style={{ width, height }}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            {label && <label className="ml-2 text-gray-700">{label}</label>}
        </div>
    );
};

export default Checkbox;