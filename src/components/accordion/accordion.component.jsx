import { useState } from 'react';
import ACCORDIONS_DATA from '../../accordions-data';
import {
    AccordionStyled,
    AccordionWrapStyled,
    AccordionCardStyled,
    AccordionCounterStyled,
    AccordionTitleStyled,
    AccordionIconStyled,
    AccordionTextWrapStyled,
    AccordionTextStyled
} from './accordion.style.jsx';

const Accordion = () => {
    const accordions = [...ACCORDIONS_DATA]
    const [currentId, setCurrentId] = useState(null)
    const [currentHeight, setCurrentHeight] = useState(0)
    
    const handleClick = (e) => {
        const { id } = e.currentTarget
        const convertedId = Number(id)
        const currentTextElementHeight = e.currentTarget
        .nextElementSibling
        .scrollHeight;

        if(currentId !== convertedId) {
            setCurrentId(convertedId)
            setCurrentHeight(currentTextElementHeight)
            return
        } 

        setCurrentId(null)
        setCurrentHeight(0)
    }

    return (
        <AccordionStyled>
            {
                accordions.map(({ id, title, text }, index) => {
                    return (
                        <AccordionWrapStyled key={id}>
                            <AccordionCardStyled id={id} onClick={handleClick}>
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
                })
            }
        </AccordionStyled>
    )
}

export default Accordion;