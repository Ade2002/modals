import React from 'react';
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
function Login(props) {
    function continueHandler(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    return (
        <>
            <span className="flex_btn">
                <button className="login active">
                    Login to continue
                </button>
                <button className="signUp ">
                    Sign up to continue
                </button>
            </span>
            <span className="flex_btn continueWith">
                <p className="goggle">
                    CONTINUE WITH <span style={{ color: 'blue' }}>G</span><span style={{ color: 'red' }}>o</span><span style={{ color: 'yellow' }}>o</span><span style={{ color: 'blue' }}>g</span><span style={{ color: 'green' }}>l</span><span style={{ color: 'red' }}>e </span></p>
                <p className="facebook " >
                    CONTINUE WITH <span style={{ color: 'blue' }}> Facebook </span>
                </p>
            </span>
            <div className='Or'>
                <svg className='empty' xmlns="http://www.w3.org/2000/svg" width="259" height="2" viewBox="0 0 259 2" fill="none">
                    <path d="M0 1L259 1.00002" stroke="#B3B3B3" stroke-width="2" />
                </svg> OR <svg className='empty' xmlns="http://www.w3.org/2000/svg" width="259" height="2" viewBox="0 0 259 2" fill="none">
                    <path d="M0 1L259 1.00002" stroke="#B3B3B3" stroke-width="2" />
                </svg>
            </div>
            <form action="post">
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email'/>
                <Formgroup label='Password' htmlFor='password' type='password' name='password' placeholder='Enter password'/>
                <Link to='/choosePlan'>
                    <button type="submit" onClick={continueHandler}> Continue <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 37 20" fill="none">
                        <path d="M35.5 10H2M35.5 10L27.5 18.5M35.5 10L27.5 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </Link>
            </form>
            <a href='google' style={{ color: '#262B33', marginTop: '1em' }}>Forgot Password?</a>
        </>
    )
}
export default Backdrop(Login);