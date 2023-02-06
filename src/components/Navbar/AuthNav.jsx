import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { apiKey, baseUrl } from "../../api/api";
import Confirm from "../SignUp/Confirm";
import SignIn from "../SignUp/SignIn";
import './../../assets/Nav.css'
import SearchBar from "./SearchBar";

const AuthNav = () => {
    const [logIn, setLogIn] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [username ,setUsername] = useState()
    const navigate = useNavigate()
    
    function logOut() {
        localStorage.clear()
        setLogIn(false)
        navigate('/' , {replace: true})
    }
 const getAcountInfo = async () => {
         const { data } = await axios.get(`${baseUrl}account${apiKey}&session_id=${localStorage.getItem('session_id')}`)
         console.log(data);
         setUsername(data.username)
         
    }

    function autoLogout() {
        setTimeout(() => {
            logOut()
        },1800000)
    }
    useEffect(() => {
        // autoLogout()
        getAcountInfo()
    },[])

    return (
        <div className="flex items-center ml-5">
            <div className="mr-5" >
                <SearchBar />
            </div>
            {
                localStorage.getItem('token') ?
                    <div>
                        <div className="flex items-center">
                            <div className="mr-4">
                                <NavLink to='/profile'>
                                    Hi {username}
                                </NavLink>
                            </div>
                            <div>
                            <button onClick={() => setConfirm(true)} style={{ backgroundColor: '#007AFD' }}  className='text-white px-4 py-1 rounded-lg text-center border font-bold'>
                                Log out
                            </button>
                        </div>
                        </div>
                        <div>
                            {
                                confirm && <Confirm no={() => setConfirm(false)} yes={() => logOut() } />
                            }            
                        </div>
                    </div>
                 
                    :
                <div>
                    <button onClick={() => setLogIn(true)} style={{ backgroundColor: "#007AFE" }} className="px-4 py-1 rounded-lg">
                        Log in
                        </button>
                    {logIn &&
                        <div className="sign-in-co fixed">
                            <SignIn closeConfirm={() => setConfirm(false) } close={() => setLogIn(false)} />
                        </div>}
    
                </div>
            }
            </div>

            
            
            
    );
}

export default AuthNav;
