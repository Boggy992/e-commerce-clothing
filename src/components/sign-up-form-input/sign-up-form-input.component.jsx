import '../../components/sign-in/sign-in.style.scss'

const SignUpFormInput = ({ name, onHandleChange, type, value }) => {
    return (
        <div className="sign-up__input-wrapper">
            <input className="sign-up__input" onChange={onHandleChange} type={type} name={name} value={value} required/>
            <label className={`sign-up__label ${value.length ? 'sign-in--shrink' : ''}`} htmlFor={name}>{name}</label>
        </div>
    )
}

export default SignUpFormInput;