import { createContext, useState } from "react";
import PropTypes from 'prop-types';


const MessageContext = createContext(null);

const MessageProvider = ({children})=>{
    const [messages, setMessages] = useState([])
    const [placeholder, setPlaceholder] = useState('Ask UPAg AI-Bot')
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

MessageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export { MessageProvider, MessageContext}