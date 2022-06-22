import styled from 'styled-components';

export const SignInInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;
`

export const SignInLabel = styled.label`
    font-size: ${({ ...rest }) => rest.value.length ? '16px' : '18px'};
    position: absolute;
    left: 10px;
    top: 50%;
    transform: ${({ ...rest }) => rest.value.length ? 'translateY(-170%)' : 'translateY(-50%)'};
    transition: 0.3s ease;
`

export const SignInInput = styled.input`
    border: 0;
    border-bottom: 2px solid black;
    padding: 1rem 0.5rem;
    outline: 0;
    &:focus ~ ${SignInLabel} {
        transform: translateY(-170%) !important;
        font-size: 16px !important;
    }
`