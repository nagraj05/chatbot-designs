import { MessageProvider } from "./MessageContext";

export const AppProvider = ({children}) => {
  return (
    <MessageProvider>
      {children}
    </MessageProvider>
  )
}

export default AppProvider;
