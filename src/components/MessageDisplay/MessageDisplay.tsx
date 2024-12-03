import React from "react";
import { useMessage } from "../../hooks/Message/MessageContext";
import { useEffect } from "react";
const MessageDisplay = () => {
    const { message, type, clearMessage } = useMessage();

    if (!type || !message) return null; // No message to display
    console.log(type);
    useEffect(() => {
        const timer = setTimeout(() => {
            clearMessage();
        }, 5000)
        return () => clearTimeout(timer);
    }, [clearMessage])

    return (
        <div
            className={`fixed top-5 right-5 px-4 py-2 rounded-lg text-white z-[23456789] cursor-pointer ${type === "success" ? "bg-green-200" : "bg-red-500"
                }`}
            onClick={clearMessage} // Dismiss message on click
        >
            {message}


        </div>

    );
};

export default MessageDisplay;
