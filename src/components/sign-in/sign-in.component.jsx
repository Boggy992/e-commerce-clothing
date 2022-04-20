import React from "react";

import './sign-in.component.jsx';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase/firebase.utils.js";

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    submitForm = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    signInValidation = (event) =>  {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='sign-in__title'>I already have an account</h2>
                <span className='sign-in__subtitle'>Sign in with your email and password</span>
                <form className='sign-in__form' onSubmit={this.submitForm}>
                    <FormInput
                        className='sign-in__input'
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        signInValidation={this.signInValidation}
                    />
                    <FormInput
                        className='sign-in__input'
                        name='password'
                        type='password'
                        label=''
                        value={this.state.password}
                        signInValidation={this.signInValidation}
                    />
                    <div className='sign-in__custom-buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={this.signInWithGoogle}>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;