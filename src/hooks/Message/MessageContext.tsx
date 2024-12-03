import React, { createContext, useState, ReactNode, useContext } from "react";
type MessageType = "success" | "error" | null;

interface MessageContextProps {
    message: string;
    type: MessageType;
    showMessage: (type: MessageType, message: string)  => void;
    clearMessage: () => void;
}
const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
    const [message, setMessage] = useState<string>("");
    const [type, setType] = useState<MessageType>(null); 
    const showMessage = (type: MessageType, message: string) => {
        setType(type);
        setMessage(message);
    }
    const clearMessage = () => {
        setType(null);
        setMessage("");
    }
    return (
        <MessageContext.Provider value={{ message, type, showMessage, clearMessage }}>
            {children}
        </MessageContext.Provider>
    )
};
export const useMessage = () => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error("useMessage must be used within a MessageProvider")
    }
    return context
}