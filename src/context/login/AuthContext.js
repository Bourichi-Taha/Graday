import { createContext, useEffect, useReducer } from "react"
import {  CryptingLocalData, DecreptingLocalData } from "../../functions/Crypting";
import { AuthReducer } from "./AuthReducer";




const INITIAL_STATE = {
    user: null ,
    isFetching: false,
    isError: false
}
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE,(prev)=>{
        try {
            if (localStorage.getItem('user') !== null) {
                const loggedUser = localStorage.getItem('user');
                const thisUser=DecreptingLocalData(loggedUser);
                return {...prev,user:thisUser}
            }else{
                return{...prev};
            }
        } catch (error) {
            console.log(error);
            return {...prev};
        } 
    });

    useEffect(() => {
        if (state.user) {
            let textData = CryptingLocalData(state.user);
            localStorage.setItem("user", textData);
        } else {
            localStorage.setItem("user", null);
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            isError: state.isError,
            dispatch
        }} >{children}</AuthContext.Provider>
    )
}