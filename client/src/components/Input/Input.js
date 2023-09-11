import React from 'react'
import './Input.css';

const Input = ({label, name, type, value, error, handleChange}) => {

    return (
        <div className='item-form'>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={ (e) => handleChange(e) }
            />
            {
                error && (
                    <p className='error-form'>{error}</p>
                )
            }
        </div>
    )

}

export default Input;