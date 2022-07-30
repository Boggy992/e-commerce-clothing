import styled from "styled-components";

export const AccordionWrapStyled = styled.div`
	max-width: 500px;
	overflow: hidden;
	margin: 0 auto;
`

export const AccordionCardStyled = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`
export const AccordionCounterStyled = styled.span`
	font-size: 24px;
    line-height: 33px;
    font-weight: 600;
    color: rgb(196, 130, 17);
    margin-right: 32px;
`

export const AccordionTitleStyled = styled.span`
	font-size: 24px;
	font-weight: 600;
	color: rgb(196, 130, 17);
`

export const AccordionIconStyled = styled.span`
	width: 35px;
	height: 35px;
	border: 1px solid rgba(rgb(207, 191, 191), 0.3);
	border-radius: 50%;
	background-color: rgb(255, 255, 255);
	margin-left: auto;
	pointer-events: none;
	position: relative;
	&::before,
	&::after {
		content: '';
		background-color: rgb(128, 112, 112);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.3s ease;
	}
	&::before {
		width: 10px;
		height: 2px;
	}
	&::after {
		width: 2px;
		height: 10px;
		background-color: ${({isExpanded}) => isExpanded && 'transparent'};
	}
`

export const AccordionTextWrapStyled = styled.div`
	width: 100%;
	max-width: 400px;
	padding: 0 20px 0 50px;
	max-height: ${({hasHeight}) => hasHeight ? `${hasHeight}px` : '0'};
	transition: 0.3s ease;
`

export const AccordionTextStyled = styled.p`
	font-size: 18px;
	line-height: 25px;
	font-weight: 400;
`