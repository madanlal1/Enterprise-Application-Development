import { useFormik } from "formik";

const Formik_Yup = () => {

    const formik = useFormik(
        {
            initialValues : { fname: "", lname:"", email:"" },

            onSubmit : (values) => {

                console.log("Form Submitted", values);
            },
            validate : values => {

                let errors = {}

                if(!values.fname) {
                    errors.fname = 'Firstname is required'
                }
                if(!values.lname) {
                    errors.lname = 'Lastname is required'
                }
                if(!values.email) {
                    errors.email = 'Email is required'
                } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
                    errors.email = 'Invalid Email'
                }
        
                return errors;
            }

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

                <button type="submit" >Submit</button> 

            </form>
        </>
    );
}
export default Formik_Yup;