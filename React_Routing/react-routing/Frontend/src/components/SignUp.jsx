import { useFormik } from "formik";
import React from 'react';

const SignUp = () => {

    const formik = useFormik({
        initialValues : {fname:'', lname:'', email:''}
    })
    
    return (
        <>
            <h1>Registration Form</h1>
<hr/>
            {JSON.stringify(formik.values)}
<hr/>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type='text' name="fname" value={formik.values.fname} onChange={formik.handleChange}/>
                    <br/>
                    <br/>
                    <label>Last Name:</label>
                    <input type='text' name="lname" value={formik.values.lname} onChange={formik.handleChange}/>
                    <br/>
                    <br/>
                    <label>Email:</label>
                    <input type='text' name="email" value={formik.values.email} onChange={formik.handleChange}/>
                </div>
            </form>
        </>
    );
}
export default SignUp;