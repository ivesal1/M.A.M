import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { apiKey, baseUrl } from '../api/api';

export const signInContext = createContext();
const UserContext = ({ children }) => {
    const [signIn, setSignIn] = useState({});
    const [sessionId, setSessionId] = useState('');
    const [userInfo ,setUserInfo] = useState({})
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    const createToken = async () => {
        const { data } = await axios.get(`${baseUrl}authentication/token/new${apiKey}`);
        setToken(data.request_token)
        setSignIn({
            success: data.success,
            token: token
        });
    };
   
     const getAcountInfo = async () => {
         const { data } = await axios.get(`${baseUrl}account${apiKey}&session_id=${sessionId}`)
         setUserInfo({
             userName : data.username
         })
        localStorage.setItem('username', data.username);
        localStorage.setItem('token', token);
     }
    useEffect(() => {
        getAcountInfo()
    },[sessionId])
    return (
        <signInContext.Provider value={{ signIn, setSignIn,createToken,sessionId,setSessionId,userInfo,setUserInfo }}>
            {children}
        </signInContext.Provider>
    );
}

export default UserContext;
