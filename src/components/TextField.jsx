import React from 'react';
import '../styles/Form.css'
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textf">
      <label  htmlFor={field.name}>{label}</label>
      <input
        className={`form-control mb-4 ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" placeholder={placeholder} 
      />
      
      <span><ErrorMessage component="div" name={field.name} className="error" /></span>
    </div>
  )
}