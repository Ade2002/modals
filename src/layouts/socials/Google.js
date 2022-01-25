import React from 'react';
import GoogleLogin from 'react-google-login'
import { useState } from 'react';
import GoogleLogo from '../../img/googleLogo.svg'
function Google(props) {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )
    const handleFailure = (result) => {
    }
    const handleLogin = (googleData) => {
        console.log(googleData);
    };
    const handleLogout = () => {
        localStorage.removeItem('loginData')
        setLoginData(null);
    }
    return (
        <>
            {
                loginData ? (
                    <>
                        <p>You Logged in as {loginData.email}</p>
                        <button onClick={handleLogout}>LogOUT</button>
                    </>
                ) : (
                    <GoogleLogin render={renderProps => (
                        <button className="login socials regular" type="submit" onClick={renderProps.onClick}>
                        <img src={GoogleLogo} alt='googlelogo' />  Google</button>
                        
                      )}  clientId='299026080175-buro0lat3f7iu915r50ksvdm45n2trep.apps.googleusercontent.com' onSuccess={handleLogin} onFailure={handleFailure} cookiePolicy={'single_host_origin'}></GoogleLogin>
                )
            }
        </>
    )
}
export default Google;