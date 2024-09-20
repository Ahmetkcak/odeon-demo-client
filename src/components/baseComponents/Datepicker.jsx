const DateTimePicker = ({ label, name, value, onChange, width = '15rem', height = 'auto', showTime = true }) => {
    return (
        <div className="flex flex-col mb-4" style={{ width, height }}>
            {label && (
                <label htmlFor={name} className="mb-2 text-gray-700 font-bold">
                    {label}
                </label>
            )}
            <input
                type={showTime ? 'datetime-local' : 'date'}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="border border-gray-300 p-2 rounded-lg"
            />
        </div>
    );
};

export default DateTimePicker;