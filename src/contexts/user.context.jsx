import {
    createContext,
    useEffect,
    useReducer
} from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    toggleUserLogged: null,
    setToggleUserLogged: () => null
})

const ACTION = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_IF_USER_LOGGED: 'SET_IF_USER_LOGGED'
}

//reducer je funkcija koja vraca novi objekat
const reducer = (state, action) => {
    // action.type = string
    // action.payload = vrednost
    const { type, payload } = action

    switch(type) {
        case ACTION.SET_CURRENT_USER:
            return {...state, currentUser: payload}
        case ACTION.SET_IF_USER_LOGGED:
            return {...state, toggleUserLogged: payload}
        default:
            return state
    }
}

const INITIAL_STATE = {
    currentUser: null,
    toggleUserLogged: null
}

export const UserProvider = ({ children }) => {
    // dispatch je setovanje vrednosti
    const [{ currentUser, toggleUserLogged }, dispatch] = useReducer(reducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch({ type: ACTION.SET_CURRENT_USER, payload: user})
    }

    const setToggleUserLogged = (toggleUserLogged) => {
        dispatch({ type: ACTION.SET_IF_USER_LOGGED, payload: toggleUserLogged})
    }

    const value = { currentUser, setCurrentUser, toggleUserLogged, setToggleUserLogged }

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