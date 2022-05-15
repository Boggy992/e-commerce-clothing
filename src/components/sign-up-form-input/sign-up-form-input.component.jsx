const SignUpFormInput = ({ name, onHandleChange, type, value }) => {
    return (
        <div className="sign-up__input-wrapper">
            <label className={`sign-up__label ${value.length ? 'sign-in--shrink' : ''}`} htmlFor={name}>{name}</label>
            <input className="sign-up__input" onChange={onHandleChange} type={type} name={name} value={value} required/>
        </div>
    )
}

export default SignUpFormInput;