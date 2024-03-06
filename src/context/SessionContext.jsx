import React, {createContext, useContext} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../util/firebase';

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

// Provider component
export const SessionProvider = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    // Add more auth-related states or functions here if necessary
    const session = {
        user,
        loading,
        error
    };

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};
