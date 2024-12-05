import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./src/firebase.init";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (updatedInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedInfo)
    }

    const logOut = () => {
        // setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const UnSub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            UnSub();
        }
    })

    const info = {
        signIn,
        googleSignIn,
        setUser,
        logOut,
        createUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;