import { useState } from 'react';

import {
    auth,
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword
} from "../../firebase/firebase.utils.js";
import SignUpFormInput from '../sign-up-form-input/sign-up-form-input.component';
import {
    SignUp,
    SignUpTitle,
    SignUpSubtitle,
    SignUpFormStyled
} from "./sign-up.style"

const defaultInputValues = {
    "displayName": '',
    "email": '',
    "password": '',
    "confirmPassword": ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultInputValues);
    const [flag, setFlag] = useState(null);

    const {
        displayName,
        email,
        password,
        confirmPassword
    } = formFields

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target

        setFormFields({...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultInputValues)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setFlag(true)
            return
        }

        await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocumentFromAuth(auth.currentUser, { displayName });

        resetFormFields()
        setFlag(false)
    }

    return (
        <SignUp>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>
            <SignUpFormStyled onSubmit={handleSubmit}>
                <SignUpFormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='displayName'
                    onHandleChange={handleChange}
                />
                <SignUpFormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    onHandleChange={handleChange}
                />
                <SignUpFormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    onHandleChange={handleChange}
                />
                <SignUpFormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='confirmPassword'
                    onHandleChange={handleChange}
                />

                {
                    flag !== null ?
                    (flag ?
                    <span>Please enter correct values...</span> :
                    <span>User created successfully.</span>) :
                    null
                }

                <button className="custom-button" type="submit">sign up</button>
            </SignUpFormStyled>
        </SignUp>
    )
}

export default SignUpForm;