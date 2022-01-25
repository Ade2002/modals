import React from "react";
import Backdrop from './HOC'
import Formgroup from '../layouts/FormGroup';
import ContinueBtn from "../layouts/ContinueBtn";
import Spanning from '../layouts/Spanning';
function CreateNewpassword(props) {
    return (<>
    <Spanning heading=' CREATE NEW PASSWORD' />
        <form action='post'>
            <Formgroup label='Create new password' htmlFor='password' type='password' name='confirmPassword' placeholder='Enter your new password' />    
            <Formgroup label='Confirm new Password' htmlFor='password' type='password' name='confirmPassword' placeholder='Confirm password' />    
            <ContinueBtn to='/passwordChanged' />
        </form>
        {/* 
      <ForgotPassword label='Email' title='FORGOT PASSWORD'/> */}
    </>
    )
}
export default Backdrop(CreateNewpassword)