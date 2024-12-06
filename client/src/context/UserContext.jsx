import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoginModalOpen,setIsLoginModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        msg: '',
        title: '',
        workedFunction: () => {}
    })

    const generateUnicID = () => {
        return uuidv4();
    };


    return (
        <UserContext.Provider value={{ 
            user, 
            setUser,
            isLoginModalOpen, 
            setIsLoginModalOpen,
            modalData,
            setModalData,

            generateUnicID
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);