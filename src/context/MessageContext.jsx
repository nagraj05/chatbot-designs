import { createContext, useContext, useState } from "react";

const MessageContext = createContext(null);

const MessageProvider = ({children})=>{
    const [messages, setMessages] = useState([])
    const [placeholder, setPlaceholder] = useState('Ask to UPAG')
    const [selectedSource, setSelectedSource] = useState(null);
    const [selectedSubSource, setSelectedSubSource] = useState(null);
    const [inpulValue, setInpulValue] = useState("");
    const [conversationId, setConversationId] = useState(null);


    const values = {
        messages,
        setMessages,
        placeholder,
        setPlaceholder,
        selectedSource,
        setSelectedSource,
        selectedSubSource,
        setSelectedSubSource,
        inpulValue,
        setInpulValue,
        conversationId,
        setConversationId
    }
    return(
        <MessageContext.Provider value={values}>
            {children}
        </MessageContext.Provider>
    )
}

const useMessage =()=> useContext(MessageContext)

export {useMessage, MessageProvider}