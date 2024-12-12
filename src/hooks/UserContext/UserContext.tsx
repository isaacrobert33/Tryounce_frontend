import React, { createContext, useState, useContext, FC, ReactNode } from 'react';

// Define the context type
interface UserContextType {
    userEmail: string;
    setUserEmail: (email: string) => void;
}

// Create the context
const UserContext = createContext<UserContextType | null>(null);


// Create the context provider
const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');

    const value: UserContextType = {
        userEmail,
        setUserEmail,
    };

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
};



// Create a custom hook to access the context
const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};


export {  useUserContext, UserContextProvider };