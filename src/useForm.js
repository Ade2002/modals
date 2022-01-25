import { useState } from 'react'



const useForm = validate => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        address:'',
        phonenumber:'',
        password: '',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
            /* [e.target.name]: e.target.value */
        })
    }
    const submit = e => {
        e.preventDefault()
        setErrors(validate(values))
      }
    return { handleChange, values, submit, errors }
};
export default useForm;