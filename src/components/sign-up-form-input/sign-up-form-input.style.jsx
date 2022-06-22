import styled from 'styled-components';

export const SignUpInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;
`

export const SignUpLabel = styled.label`
    font-size: ${({ hasValue }) => hasValue ? '16px' : '18px'};
    position: absolute;
    left: 10px;
    top: 50%;
    transform: ${({ hasValue }) => hasValue ? 'translateY(-170%)' : 'translateY(-50%)'};
    pointer-events: none;
    transition: 0.3s ease;
`

export const SignUpInput = styled.input`
    border: 0;
    border-bottom: 2px solid black;
    padding: 1rem 0.5rem;
    outline: 0;
    &:focus ~ ${SignUpLabel} {
        transform: translateY(-170%);
        font-size: 16px;
    }
`