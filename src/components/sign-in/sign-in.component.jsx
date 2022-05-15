import React from "react";
// import { getRedirectResult } from "firebase/auth";

import './sign-in.component.jsx';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SignUpForm from '../sign-up/sign-up.component';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    // signInWithGoogleRedirect 
} from "../../firebase/firebase.utils.js";

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    logGoogleUser = async () => {
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

    // componentDidMount() {
    //     const getRedirectResponse = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRed = createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirectResponse();
    // }

    render() {
        return (
            <div className="sign-container">
                <div className='sign-in'>
                    <h2 className='sign-in__title'>I already have an account</h2>
                    <h3 className='sign-in__subtitle'>Sign in with your email and password</h3>
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
                            <CustomButton isGoogleSignIn onClick={this.logGoogleUser}>Sign in with google</CustomButton>
                        </div>
                    </form>
                </div>
                <SignUpForm />
            </div>
        )
    }
}

export default SignIn;