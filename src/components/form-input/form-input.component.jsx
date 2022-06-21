import React from "react";

import './form-input.style.scss';

const FormInput = ({ signInValidation, label, ...rest  }) => {
    return (
        <div className='sign-in__input-wrapper'>
            <input className='sign-in__email sing-in__input' {...rest} onChange={signInValidation} required></input>
            <label className={`sign-in__label ${rest.value.length ? 'sign-in--shrink': ''}`} htmlFor={rest.name}>{rest.name}</label>
        </div>
    )
}

export default FormInput;