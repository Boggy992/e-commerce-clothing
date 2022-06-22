import React from "react";

import {
    SignInInputWrapper,
    SignInInput,
    SignInLabel
} from './form-input.style';

const FormInput = ({ signInValidation, label, ...rest  }) => {
    return (
        <SignInInputWrapper>
            <SignInInput {...rest} onChange={signInValidation} required></SignInInput>
            <SignInLabel {...rest} htmlFor={rest.name}>{rest.name}</SignInLabel>
        </SignInInputWrapper>
    )
}

export default FormInput;