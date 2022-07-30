import { useState } from 'react';
import ACCORDIONS_DATA from '../../accordions-data';
import AccordionItem from '../accordion-item/accordion-item.component';
import { AccordionStyled } from './accordion.style.jsx';

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
                accordions.map(({ id, ...rest }, index) => (
                    <AccordionItem 
                        key={id} 
                        id={id} 
                        {...rest}
                        index={index}
                        onHandleClick={handleClick}
                        currentId={currentId}
                        currentHeight={currentHeight}
                    />
                ))
            }
        </AccordionStyled>
    )
}

export default Accordion;