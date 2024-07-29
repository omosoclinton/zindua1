import React,{useContext, createContext} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children})=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login  = () => setIsLoggedIn(true)
    const logout = () => setIsLoggedIn(false)
   
    const value = {
        login,
        logout,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;
