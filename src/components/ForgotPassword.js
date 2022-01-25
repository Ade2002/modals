import React from "react";
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import Spanning from '../layouts/Spanning';
import { Link } from 'react-router-dom'
function ForgotPassword(props) {
    return (
        <>
            <Spanning heading='FORGOT PASSWORD' />
            <form action='post'>
                <Formgroup label='Email' htmlFor='Email' type='email' name='email' placeholder='Enter your email' />
                <ContinueBtn to='/createNewPassword' />
            </form>
            <span className="flex_link">
                <Link to='/' className='opacity' style={{ color: '#262B33', fontSize: '15px' }}>Remember your Password?</Link> <Link to='/' className='opacity' style={{ color: '#1207AB', textDecoration: 'none', fontSize: '16px' }}>Login </Link>
            </span>
            {/* 
      <ForgotPassword label='Email' title='FORGOT PASSWORD'/> */}
        </>
    )
}
export default Backdrop(ForgotPassword);