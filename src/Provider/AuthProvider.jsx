import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    console.log(user);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (updateUser)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,updateUser)
    }

    const logOut = ()=>{
      return signOut(auth) 
    }

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsbscribe()
        }
    },[])

    const userData = {
        user,
        setUser,
        createUser,
        updateUser,
        logOut,
        loading
    }
    return <AuthContext value={userData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;