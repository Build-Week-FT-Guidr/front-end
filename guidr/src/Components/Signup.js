import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// axiosWithAuth

const Signup = (props) => {
  const { history } = props;
  return (
      <Formik 
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}

        validationSchema={
          Yup.object().shape({
            name: Yup.string().required('Please enter your first and last name'), 
            email: Yup.string().required('Please enter your email'), // check for @ 
            password: Yup.string().required('Please enter a password'),
            confirmPassword: Yup.string().required('Please confirm your password') //check that passwords match
          })
        }
        
        // onSubmit={values => {
        //   axiosWithAuth()
        //   .post('url', values)
        //   .then(res => {
        //     // post to users database
        //   })
        //   .catch(err => console.log(err))
        // }}

        render={({ errors, status, touched}) => (
          <Form className='signup-form-container'>
              <div className='form-box'>
      
              <Field type='text'
              name='name'
              placeholder='Name (First, Last)' 
              />
              {touched.name && errors.name && (<p>{errors.name}</p>)} 

              <Field type='text'
              name='email'
              placeholder='Email' 
              />
              {touched.email && errors.email && (<p>{errors.email}</p>)} 


      
              <Field type='password' 
              name='password'
              placeholder='password'
              />
              {touched.password && errors.password && (<p>{errors.password}</p>)}

              <Field type='password' 
              name='confirmPassword'
              placeholder='Confirm password'
              />
              {touched.confirmPassword && errors.confirmPassword && (<p>{errors.confirmPassword}</p>)}

              <button type='submit'>Log in</button>
              
                  {/* form validation checks */}
              
              </div>
            
          </Form>
      )}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      /> //end formik form
  )
};

export default Signup;
