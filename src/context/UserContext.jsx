import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { apiKey, baseUrl } from '../api/api';
import { toast } from "react-hot-toast";

export const signInContext = createContext();
const UserContext = ({ children }) => {
    const [sessionId, setSessionId] = useState('');
    const [userInfo ,setUserInfo] = useState({})

    const createToken = async (userName , password) => {
        const { data } = await axios.get(`${baseUrl}authentication/token/new${apiKey}`);
        localStorage.setItem('token', data.request_token);
        try {            
            await axios.post(`${baseUrl}authentication/token/validate_with_login${apiKey}`, {   
                "username": userName,
                "password":password,
                "request_token": data.request_token
            }).then(res => {
                console.log(res);
            })
        } catch (err) {
            toast.error('invalid username or password')
        }
        const authorize =  await axios.post(`${baseUrl}authentication/session/new${apiKey}`, {
            "request_token": data.request_token
        })
        setSessionId(authorize.data.session_id)
        localStorage.setItem('session_id', authorize.data.session_id)
        toast.success('You are loged in')
    };
    
    return (
        <signInContext.Provider value={{ createToken,sessionId,setSessionId,userInfo,setUserInfo }}>
            {children}
        </signInContext.Provider>
    );
}

export default UserContext;
