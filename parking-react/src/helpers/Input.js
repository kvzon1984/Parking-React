
export default function Input({ placeholder, handleChange, name }) {
    return (
        <div className="mb-3">
            <input
                name={name}
                className="input is-rounded"
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}