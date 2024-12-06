import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoginModalOpen,setIsLoginModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        msg: '',
        title: '',
        workedFunction: () => {}
    })

    return (
        <UserContext.Provider value={{ 
            user, 
            setUser,
            isLoginModalOpen, 
            setIsLoginModalOpen,
            modalData,
            setModalData
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);