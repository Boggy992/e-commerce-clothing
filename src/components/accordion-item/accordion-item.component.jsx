import {
    AccordionWrapStyled,
    AccordionCardStyled,
    AccordionCounterStyled,
    AccordionTitleStyled,
    AccordionIconStyled,
    AccordionTextWrapStyled,
    AccordionTextStyled
} from './accordion-item.style.jsx';

const AccordionItem = ({ id, title, text, index, onHandleClick, currentId, currentHeight }) => {
    return (
        <AccordionWrapStyled>
            <AccordionCardStyled id={id} onClick={onHandleClick}>
                <AccordionCounterStyled>{id + 1}</AccordionCounterStyled>
                <AccordionTitleStyled>{title}</AccordionTitleStyled>
                <AccordionIconStyled isExpanded={currentId === index}></AccordionIconStyled>
            </AccordionCardStyled>
            <AccordionTextWrapStyled 
                hasHeight={currentId === index && currentHeight} 
                isExpanded={currentId === index}>
                <AccordionTextStyled>{text}</AccordionTextStyled>
            </AccordionTextWrapStyled>
        </AccordionWrapStyled>
    )
}

export default AccordionItem;