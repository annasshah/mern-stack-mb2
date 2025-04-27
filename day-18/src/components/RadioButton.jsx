import React from 'react'

const RadioButton = ({ label, options, name, onChange }) => {
    return (
        <div>
            {label}
            {options.map((opt) => <label>
                <input onChange={onChange} type="radio" name={name} value={opt} />
                {opt}
            </label>)}
        </div>
    )
}

export default RadioButton
