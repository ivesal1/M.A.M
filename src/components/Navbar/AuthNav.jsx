import { useState } from "react";
import { useContext } from "react";
import { signInContext } from "../../context/UserContext";
import SignIn from "../SignUp/SignIn";
import './../../assets/Nav.css'

const AuthNav = () => {
    const { signIn, setSignIn, createToken, sessionId, setSessionId, userInfo, setUserInfo } = useContext(signInContext);
    const [logIn, setLogIn] = useState(false)
   console.log(signIn.token);
    return (
        <div className="flex items-center ml-5">
            <div className="mr-5" >Search</div>
            {
                localStorage.getItem('token') ?
                    <div>Hi {localStorage.getItem('username')}</div>
                 
                    :
                <div>
                    <button onClick={() => setLogIn(true)} style={{ backgroundColor: "#007AFE" }} className="px-4 py-1 rounded-lg">
                        Sign in
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
