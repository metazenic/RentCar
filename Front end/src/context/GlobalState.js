import React, { createContext, useState} from 'react';
//import AppReducer from './AppReducer';

// const initialState = {
//     sessionStarted: false
// }

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    //const [state, dispatch] = useReducer(AppReducer, initialState);
    const [sessionStarted, setSessionStarted] = useState(sessionStorage.getItem("isLoggedIn"));

    // function alreadyLogin() {
    //     // dispatch({
    //     //     type: "Login",
    //     //     payload:true
    //     // })
    // }
    // function logOut() {
    //     // dispatch({
    //     //     type: "Logout",
    //     //     payload:false
    //     // })
    // }

    return (
        <GlobalContext.Provider value= {{ sessionStarted: sessionStarted, setSessionStarted}}>
            {children}
        </GlobalContext.Provider>
    )
}
