import { createContext, useReducer, useEffect } from 'react';

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
            ? {...cardItem, quantity: cardItem.quantity + 1}
            : cardItem
        )
    }

    return [...cardItems, {...productToAdd}]
}

const removeCardItem = (cardItems, productToRemove) => {
    return [...cardItems.filter((item) => item.id !== productToRemove.id)]
}

const icreaseCardQuantity = (cardItems, checkoutProductToAdd) => {

    const isExist = cardItems.find((cardItem) => cardItem.id === checkoutProductToAdd.id)

    if(isExist) {
        return cardItems.map((cardItem) =>
            cardItem.id === checkoutProductToAdd.id
            ? { ...cardItem, quantity: cardItem.quantity + 1}
            : cardItem
        )
    }

    return [...cardItems]
}

const decreaseCardQuantity = (cardItems, checkoutProductToAdd) => {

    const isExist = cardItems.find((cardItem) => cardItem.id === checkoutProductToAdd.id)

    if(isExist) {
        return cardItems.map((cardItem) => {
            let isPositive = cardItem.quantity ? cardItem.quantity - 1 || 1 : 1
            return cardItem.id === checkoutProductToAdd.id
            ? { ...cardItem, quantity: isPositive}
            : cardItem
        })
    }

    return [...cardItems]
}

export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => null,
    cardItems: [],
    addItemToCard: () => {},
    cardCount: 0,
    removeItemFromCard: () => {},
    totalPrice: 0,
    icreaseQuantityFromCard: () => {},
    decreaseQuantityFromCard: () => {}
})

const ACTION = {
    TOOGLE_CARD_DROPDOWN: "TOOGLE_CARD_DROPDOWN",
    SET_CARD_ITEMS: "SET_CARD_ITEMS",
    SET_CARD_COUNT: "SET_CARD_COUNT",
    SET_TOTAL_PRICE: "SET_TOTAL_PRICE"
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case ACTION.TOOGLE_CARD_DROPDOWN:
            return { ...state, isCardOpen: payload }
        case ACTION.SET_CARD_ITEMS:
            return { ...state, cardItems: payload }
        case ACTION.SET_CARD_COUNT:
            return { ...state, cardCount: payload }
        case ACTION.SET_TOTAL_PRICE:
            return { ...state, totalPrice: payload }
        default:
            throw new Error(`There is error in ${type}`)
    }
}

const INITIAL_STATE = {
    isCardOpen: false,
    cardItems: [],
    cardCount: 0,
    totalPrice: 0
}

export const CardProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE)
    const { isCardOpen, cardItems, cardCount, totalPrice } = state

    const setIsCardOpen = () => {
        dispatch({ type: ACTION.TOOGLE_CARD_DROPDOWN, payload: !isCardOpen })
    }

    const setCardItems = (addCardItem) => {
        dispatch({ type: ACTION.SET_CARD_ITEMS, payload: addCardItem })
    }

    const setCardCount = (totalItems) => {
        dispatch({ type: ACTION.SET_CARD_COUNT, payload: totalItems })
    }

    const setTotalPrice = (finalPrice) => {
        dispatch({ type: ACTION.SET_TOTAL_PRICE, payload: finalPrice })
    }

    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }

    const removeItemFromCard = (productToRemove) => {
        setCardItems(removeCardItem(cardItems, productToRemove))
    }

    const icreaseQuantityFromCard = (checkoutProductToAdd) => {
        setCardItems(icreaseCardQuantity(cardItems, checkoutProductToAdd))
    }

    const decreaseQuantityFromCard = (checkoutProductToAdd) => {
        setCardItems(decreaseCardQuantity(cardItems, checkoutProductToAdd))
    }

    useEffect(() => {
        // DRUGI PARAMETAR REDUCEA JE ELEMENT(CURRENT ELEMENT)
        const total = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
        setCardCount(total)
    }, [ cardItems ])

    useEffect(() => {
        // DRUGI PARAMETAR REDUCEA JE ELEMENT(CURRENT ELEMENT)
        const finalPrice = cardItems.reduce((total, cardItem) => total + (cardItem.price * cardItem.quantity), 0)
        setTotalPrice(finalPrice)
    }, [ cardItems ])

    const value = {
        isCardOpen,
        setIsCardOpen,
        cardItems,
        setCardItems,
        addItemToCard,
        cardCount,
        removeItemFromCard,
        totalPrice,
        icreaseQuantityFromCard,
        decreaseQuantityFromCard }

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}