import React from 'react';
import '../styles/Form.css'
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textf">
      <label  htmlFor={field.name}>{label}</label>
      <input
        className={`form-control ${meta.error ? "mb-2":"mb-4"} ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" placeholder={placeholder} 
      />
      
      <span><ErrorMessage component="div" name={field.name} className="error mb-3" /></span>
    </div>
  )
}