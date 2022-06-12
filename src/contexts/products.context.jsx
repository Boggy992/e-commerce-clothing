import {
    createContext,
    useState,
    useEffect
} from 'react';

import {
    // addCollectionAndDocuments,
    getCategoriesAndDocuments
} from '../firebase/firebase.utils';

// import PRODUCTS from '../shop-data.js';

export const ProductsContext = createContext({
    products: {}
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({})
    const value = { products }

    // samo pokreni jednom da bi upisao podatke pod key-em 'categories' u firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', PRODUCTS)
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setProducts(categoryMap)
        }

        getCategoriesMap()
    }, [])

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}