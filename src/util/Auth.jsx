import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import {auth} from "./firebase.js";

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
        console.error("Error signing in with Google: ", error);
    }
};

// const signInWithEmail = async ()=> {
//     try {
//         await signInWithEmail(auth)
//     }
// }


export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};