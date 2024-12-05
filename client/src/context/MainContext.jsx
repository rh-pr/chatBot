
import { ChatProvider } from './ChatContext';
import { UserProvider } from './UserContext';

export const MainContextProvider = ({ children }) => {
    return (
       <UserProvider>
            <ChatProvider>
                {children}
            </ChatProvider>
       </UserProvider>
    );
};

export default MainContextProvider;
