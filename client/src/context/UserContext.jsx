
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { postRequest } from '../services/httpRequst';

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

    const logIn = async(data) => {
        const url = `${import.meta.env.VITE_BASE_URL}/users/login`;
        const res = await postRequest(url, data);
        setUser(res);
    };

    useEffect(() => {

    },[])

    return (
        <UserContext.Provider value={{ 
            user, 
            setUser,
            isLoginModalOpen, 
            setIsLoginModalOpen,
            modalData,
            setModalData,

            generateUnicID,
            logIn
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);