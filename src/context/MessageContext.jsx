import { createContext, useContext, useState } from "react";

const MessageContext = createContext(null);

const MessageProvider = ({children})=>{
    const [messages, setMessages] = useState([])
    const [placeholder, setPlaceholder] = useState('Write a messages')
    const [selectedSource, setSelectedSource] = useState(null);
    const [selectedSubSource, setSelectedSubSource] = useState(null);

    const values = {
        messages,
        setMessages,
        placeholder,
        setPlaceholder,
        selectedSource,
        setSelectedSource,
        selectedSubSource,
        setSelectedSubSource
    }
    return(
        <MessageContext.Provider value={values}>
            {children}
        </MessageContext.Provider>
    )
}

const useMessage =()=> useContext(MessageContext)

export {useMessage, MessageProvider}