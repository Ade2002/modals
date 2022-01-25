import React from "react";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import useForm from '../useForm';
import validate from '../validateInfo';
function SignUp(props) {
    
    useEffect(() => { document.title = 'SignUp' })
    const {handleChange, values, submit, errors} = useForm(validate);
    return (
        <>
            <span className='already_'>
                <Link className="already opacity" to='/' style={{ color: '#262B33' }}>Have an account?</Link>
            </span>
            <span className="flex_btn">
                <button className="login regular">
                    <Link to='/'>
                        Login to continue
                    </Link>
                </button>
                <button className="signUp active">
                    <Link to='/signup'>
                        Sign up to continue
                    </Link>
                </button>
            </span>
            <form action="post" name="form" method="post" validate="true" autoComplete="on" onSubmit={submit}>
                <h3 className='title'>SIGN UP</h3>
                <Formgroup value={values.fullname} onChange={handleChange} label='Full Name' htmlFor='name' minLength='10' maxLength="60" id='name' type='text' name='fullname' placeholder='Enter your full name'  required/>
                {errors.fullname && <i>{errors.fullname}</i>}
                <Formgroup value={values.email} onChange={handleChange} label='Email' htmlFor='email' maxLength="50" id='email' type='email' name='email' placeholder='Enter your email'  required/>
                {errors.email && <i>{errors.email}</i>}
                <Formgroup value={values.address} onChange={handleChange} label='Home Address' htmlFor='address' id='address' type='address' name='address' placeholder='Enter your home address' />
                {errors.address && <i>{errors.address}</i>}
                <Formgroup value={values.phonenumber} onChange={handleChange} label='Phone Number' htmlFor='Phone' id='Phone' minLength='11' maxLength="15"  type='tel' name='phonenumber' placeholder='Enter phone number'  required/>
                {errors.phonenumber && <i>{errors.phonenumber}</i>}
                <Formgroup value={values.password} onChange={handleChange} label='Password' id='password'  minLength='8' htmlFor='password' type='password' name='password' placeholder='Enter password' required/>
                {errors.password && <i>{errors.password}</i>}
                <Formgroup value={values.confirmPassword} onChange={handleChange} label='Confirm Password'  id='confirmPassword' minLength='8' htmlFor='confirmPassword' type='password' name='confirmPassword' required placeholder='Confirm password' />
                {errors.confirmPassword && <i>{errors.confirmPassword}</i>}
                <ContinueBtn to='/upload' />
            </form>
        </>
    )
}
export default Backdrop(SignUp);