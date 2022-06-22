import styled, { css } from 'styled-components';

// isto kao modifier u scss-u, blok propertija, posle dodeljujem varijabli
// odnosno komponenti kojoj treba kada se ispuni uslov
const shrinkLabel = css`
    font-size: 16px;
    transform: translateY(-170%);
`

export const SignUpInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;
`

export const SignUpLabel = styled.label`
    font-size: 18px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.3s ease;

    ${({hasValue}) => hasValue && shrinkLabel}
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