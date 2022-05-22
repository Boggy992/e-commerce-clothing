import {
    createContext,
    useState,
    useEffect
} from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const value = { products, setProducts }

    useEffect(() => {
        if(!PRODUCTS) return

        const data = [...PRODUCTS]

        setProducts(data)
    }, [])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
} 