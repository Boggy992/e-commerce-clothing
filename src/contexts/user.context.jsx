import {
    createContext,
    useReducer,
    useEffect
} from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

const ACTION = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case ACTION.SET_CURRENT_USER: 
            return { ...state, currentUser: payload }
        default:
            throw new Error(`Unhendled type ${type} in reducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE)
    const { currentUser } = state

    const setCurrentUser = (currentUser) => {
        dispatch({ type: ACTION.SET_CURRENT_USER, payload: currentUser })
    }

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })


        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}