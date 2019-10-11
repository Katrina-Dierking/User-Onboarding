import React, {useState, useEffect} from'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';


const UserForm = ({errors, touched, status}) => {
  console.log(status)
  const [users, setUsers] = useState ([])

  useEffect(() => {
      if (status) {
    setUsers([ ...users, status ])
    }
    }, [users, status])

    return (

        
        <Form>
            <h1>Add a new user below: </h1><br />

                 {touched.name && errors.name && <p className="error">{errors.name}</p>}
                  <Field
                    type="text"
                    name="name"
                    placeholder = "* name"
                
                    />

                <br /><br />

                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                <Field 
                    type="text"
                    name="email"
                    placeholder = "* email"
                    
                    />

                <br /><br />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
               <Field
                    type="password"
                    name="password"
                    placeholder = "* password"
                   
                    /> 
                <br /><br />

            <label>
            {touched.password && errors.terms && <p className="error">{errors.terms}</p>}
             <Field type = "checkbox" name = "terms" /> 
             <span>Terms of Service</span>   
            </label>

            <br></br>
            <div className = "serviceBox">
                <Field component = "textarea" name="notes" placeholder="Terms of Services: 
                is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book." />       
                </div>         

                <br></br>

                <button type = "sumbit">Submit</button>

                {/* Name {status.name}<br />
                Email {status.email}<br />
                Terms? {status.terms}<br />  */}

                {users.map((users) => ( 
                    <div>Name: {users.name}</div>
                ))}
        </Form>
    )
}


export default withFormik ({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '', 
            terms: values.terms || false,
            notes: values.notes || ''
        }
    }, 

    validationSchema: yup.object().shape ({
        name: yup.string().required('Please enter your name'),
        email: yup.string().required(),
        password: yup.string().required(),
        terms: yup.boolean().required()
    }),

    handleSubmit: (values, {setStatus}) => {
        // https://reqres.in/api/users
       axios.post('https://reqres.in/api/users', values)
       .then((res) => {
           console.log(res)
       })
       .catch((err) => {
           console.log('Error:', err)
       })
    }
 }) (UserForm)