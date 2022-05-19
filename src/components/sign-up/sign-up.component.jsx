import { useState, useContext } from 'react';

import { UserContext } from '../../contexts/user.context';

import {
    createAuthUserWithEmailAndPassword,
    auth,
    createUserDocumentFromAuth
} from "../../firebase/firebase.utils.js";
import SignUpFormInput from '../sign-up-form-input/sign-up-form-input.component';
import "../sign-up/sign-up.style.scss"

const defaultInputValues = {
    "displayName": '',
    "email": '',
    "password": '',
    "confirmPassword": ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultInputValues);
    const [flag, setFlag] = useState(null);
    const { setCurrentUser } = useContext(UserContext);

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

        await createAuthUserWithEmailAndPassword(email, password, displayName)
        await createUserDocumentFromAuth(auth.currentUser)

        setCurrentUser(auth.currentUser);
        resetFormFields()
        setFlag(false)
    }

    return (
        <div className="sign-up">
            <h2 className="sign-up__title">I do not have a account</h2>
            <h3 className="sign-up__subtitle">Sign up with your email and password</h3>
            <form className="sign-up__form" onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default SignUpForm;