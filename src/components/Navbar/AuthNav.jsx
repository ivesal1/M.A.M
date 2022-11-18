import { useState } from "react";
import { useContext } from "react";
import { signInContext } from "../../context/UserContext";
import Confirm from "../SignUp/Confirm";
import SignIn from "../SignUp/SignIn";
import './../../assets/Nav.css'

const AuthNav = () => {
    const { signIn, setSignIn, createToken, sessionId, setSessionId, userInfo, setUserInfo } = useContext(signInContext);
    const [logIn, setLogIn] = useState(false)
    const [confirm, setConfirm] = useState(false)
    
    function logOut() {
        localStorage.clear()
        setSignIn({});
        setUserInfo({})
    }

    return (
        <div className="flex items-center ml-5">
            <div className="mr-5" >Search</div>
            {
                localStorage.getItem('token') ?
                    <div>
                        <div className="flex items-center">
                            <div className="mr-4">
                                Hi {localStorage.getItem('username')}
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
                            <SignIn close={() => setLogIn(false)} />
                            </div>}
    
                </div>
            }
            </div>

            
            
            
    );
}

export default AuthNav;
