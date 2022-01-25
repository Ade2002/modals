import React from 'react';
import { useEffect } from 'react'
import Backdrop from './HOC'
import { Link } from 'react-router-dom'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import FlexBtn from '../layouts/Flex_btn';/* 
import FacebookLogo from '../img/facebookLogo.svg' */
import Google from '.././layouts/socials/Google'
import Facebook from '.././layouts/socials/Facebook'
import useForm from '../useForm';
import validate from '../validateInfo';
function Login(props) {
    useEffect(() => { document.title = 'Login' })
    const {handleChange, values, submit, errors} = useForm(validate);
    return (
        <>
            <span className='dont_'>
                <Link className="dont opacity" to='/signup' style={{ color: '#262B33' }}>Don't have an account?</Link>
            </span>
            <FlexBtn login='Login to continue' signup='Sign up to continue' />
            <span className='flex_btn'>
                <h3>Login with</h3>
            </span>
            <span className="flex_btn">
                <Google />
                <small> OR </small>
                <Facebook />
                {/* <button className="signUp socials regular">
                    <img src={FacebookLogo} alt='facebooklogo' />  Facebook
                </button> */}
            </span>

            <form action="post" name="form" method="post" validate="true" autoComplete="on" onSubmit={submit}>
                <h3 className='title'>LOGIN</h3>
                <Formgroup value={values.email} onChange={handleChange} required size="10" maxLength="50" label='Email' htmlFor='email' id='email' type='email' name='email' placeholder='Enter your email' />
                {errors.email && <i>{errors.email}</i>}
                <Formgroup value={values.password} onChange={handleChange} required label='Password' minLength='8' htmlFor='password' id='password' type='password' name='password' placeholder='Enter password' />
                {errors.password && <i>{errors.password}</i>}
                <ContinueBtn to='signup' />
            </form>
            <Link to='/forgotpassword' className='opacity' style={{ color: '#262B33', marginTop: '2em', fontSize: '15px' }}>Forgot Password?</Link>
        </>
    )
}
export default Backdrop(Login);