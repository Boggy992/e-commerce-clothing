import {
    SignUpInputWrap,
    SignUpLabel,
    SignUpInput
 } from './sign-up-form-input.style';

const SignUpFormInput = ({ name, onHandleChange, type, value }) => {
    return (
        <SignUpInputWrap>
            <SignUpInput onChange={onHandleChange} type={type} name={name} value={value} required/>
            <SignUpLabel hasValue={value.length} htmlFor={name}>{name}</SignUpLabel>
        </SignUpInputWrap>
    )
}

export default SignUpFormInput;