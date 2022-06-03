import { createContext, useState } from 'react';

const addCardItem = (cardItems, productToAdd) => {
    const existingItems = [...cardItems]

    const index = existingItems.map((el) => el.id).indexOf(productToAdd.id)

    if(index > -1) {
        existingItems[index].quantity++
    } else {
        existingItems.push(productToAdd)
    }

    return existingItems;
}


export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => null,
    cardItems: [],
    addItemToCard: () => {}
})

export const CardProvider = ({ children }) => {
    const [ isCardOpen, setIsCardOpen ] = useState(false)
    const [ cardItems, setCardItems ] = useState([])
    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }

    const value = { isCardOpen, setIsCardOpen, cardItems, setCardItems, addItemToCard }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}