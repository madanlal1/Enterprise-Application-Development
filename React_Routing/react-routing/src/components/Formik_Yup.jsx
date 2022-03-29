import { useFormik } from "formik";
import * as Yup from 'yup';

const Formik_Yup = () => {

    const formik = useFormik(
        {
            initialValues : { firstname: "", lastname:"", email:"", gender:""},

            onSubmit : (values) => {

                console.log("Form Submitted", values);
            },
            // validate : values => {

            //     let errors = {}

            //     if(!values.fname) {
            //         errors.fname = 'Firstname is required'
            //     }
            //     if(!values.lname) {
            //         errors.lname = 'Lastname is required'
            //     }
            //     if(!values.email) {
            //         errors.email = 'Email is required'
            //     } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
            //         errors.email = 'Invalid Email'
            //     }
        
            //     return errors;
            // }
            validationSchema:Yup.object({
                fname:Yup.string()
                            .max(30,"Firstname should not exceed 10 characters.")
                            .required("Firstname is required"),
                lname:Yup.string()
                            .max(30,"Lastname should not exceed 10 characters.")
                            .required("Lastname is required"),
                email:Yup.string()
                            .max(30, "Email should not exceed 15 characters")
                            .required("Email is required"),
                gender:Yup.string()
                            .required(" select gender")
            })

        }
    )
    

    return (
        <>

            {JSON.stringify(formik.values)} 
            <h1></h1>

            <form onSubmit={formik.handleSubmit}>

                <input type="text" name="fname" value={formik.values.fname} placeholder="Firstname" onChange={formik.handleChange}/> 
                <span style={{color: 'red'}}>{formik.touched.fname && formik.errors.fname}</span>
                <br/>
                <input type="text" name="lname" value={formik.values.lname} placeholder="Lastname" onChange={formik.handleChange}/>  
                <span style={{color: 'red'}}>{formik.touched.lname && formik.errors.lname}</span>
                <br/>
                <input type="email" name="email" value={formik.values.email} placeholder="Email" onChange={formik.handleChange}/>  
                <span style={{color: 'red'}}>{formik.touched.email && formik.errors.email}</span>
                <br/>

                <input type="radio" name="gender" value="male" onChange={formik.handleChange}/>
                <label>male</label>
                <input type="radio" name="gender" value="female" onChange={formik.handleChange}/>
                <label>female</label>
                <span style={{color: 'red'}}>{formik.touched.gender && formik.errors.gender}</span>
                <br />
                <button type="submit" >Submit</button> 

            </form>
        </>
    );
}
export default Formik_Yup;