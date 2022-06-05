import { createContext, useState, useEffect } from 'react';

const addCardItem = (cardItems, productToAdd) => {
    // const existingCardItems = [...cardItems];

    // 1a. nacin na koji mozes da resis ako ne postoji element u nizu dodaj element ili povecaj quantity
    // const ifElExist = existingCardItems.find((item) => item.id === productToAdd.id)

    // if(ifElExist) {
    //     const currentIndex = existingCardItems.map((item) => item.id).indexOf(productToAdd.id)
    //     existingCardItems[currentIndex].quantity++
    // } else {
    //     existingCardItems.push(productToAdd)
    // }

    // 1b. nacin na koji mozes da resis ako ne postoji element u nizu dodaj element ili povecaj quantity
    // const currentIndex = existingCardItems.map((item) => item.id).indexOf(productToAdd.id)

    // if(currentIndex > -1) {
    //     existingCardItems[currentIndex].quantity++
    // } else {
    //     existingCardItems.push(productToAdd)
    // }

    // return existingCardItems

    //2 nacin na koji mozes da resis ako ne postoji element u nizu dodaj element ili dodaj property(quantity i price)
    const isExsist = cardItems.find((cardItem) => cardItem.id === productToAdd.id)

    if(isExsist) {
        return cardItems.map((cardItem) => 
            cardItem.id === productToAdd.id
            ? {...cardItem, quantity: cardItem.quantity + 1, price: productToAdd.price + cardItem.price}
            : cardItem
        )
    }

    return [...cardItems, {...productToAdd}]
}


export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => null,
    cardItems: [],
    addItemToCard: () => {},
    cardCount: 0
})

export const CardProvider = ({ children }) => {
    const [ isCardOpen, setIsCardOpen ] = useState(false)
    const [ cardItems, setCardItems ] = useState([])
    const [ cardCount, setCardCount ] = useState(0)
    
    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }

    useEffect(() => {
        // DRUGI PARAMETAR REDUCEA JE ELEMENT(CURRENT ELEMENT)
        const total = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
        setCardCount(total)
    }, [ cardItems ])

    const value = { isCardOpen, setIsCardOpen, cardItems, setCardItems, addItemToCard, cardCount }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}