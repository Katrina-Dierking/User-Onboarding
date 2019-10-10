import React from'react';
import {withFormik, Form, Field} from 'formik';

const UserForm = (props) => {
console.log(props)
    return (

        
        <Form>

        <h1>Add a new team member below: </h1><br />
            <Field
                    type="text"
                    name="name"
                    placeholder = "name"
                
                    />

                <br /><br />

                <Field 
                    type="text"
                    name="email"
                    placeholder = "email"
                    
                    />

                <br /><br />

               <Field
                    type="password"
                    name="password"
                    placeholder = "password"
                   
                    /> 
                <br /><br />

                <Field
                    type = "checkbox"
                    name = "Terms of Service"
            
                    /> 
        </Form>
    )
}


export default withFormik ({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '', 
        }
    }, 

    handleSubmit: (values) => {
        console.log(values)
    }
 }) (UserForm)