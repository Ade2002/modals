export default function validateInfo(values) {
    let errors = {}
    //Full Name
    if (!values.fullname) {
        errors.fullname = 'Please enter your Full Name'
    } else if (values.fullname.length < 18) {
        errors.fullname = 'Full Name is too short, Must contain At least 15 English ALphabet'
    }
    //Home Address
    if (!values.address) {
        errors.address = 'Please Enter Your Residence Address'
    }
    //Phone Number
    if (!values.phonenumber) {
        errors.phonenumber = 'your Mobile Number Is Required'
    }

    //Email
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid'
    }

    //Password
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 8) {
        errors.password = 'Password is too short, Must contain At least 8 characters'
    }

    //Confirm Password
    if(!values.confirmPassword){
        errors.confirmPassword = 'Please Confirm your password'
    }else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match, please check and try again.'
    }

    //Choose PLan







    return errors;
}