import { useFormik } from 'formik';
import React from 'react'
import Button from '../../shared/Button/Button';
import Title from '../../shared/UiElment/Title/Title';
import classes from './NewsLetter.module.css';

const NewsLetter = () => {
  const validate = values => {
    const errors = {};  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
   <section className={classes.background}>
    <div className={classes.title}>
    <Title
    title='Subscribe to get update'
    desc='By subscribing you will get newsleter,promotions adipiscing elit.
    Architecto beatae,asperiores tempore repudiandae saepe aspernatur
    unde voluptate sapiente quia ex.'
    />
    </div>

 
    <form className={classes.form}  onSubmit={formik.handleSubmit}>
      <div className={`${classes.inputs} ${formik.errors.email?classes.inputs_error:''}`} >
      <input 
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         placeholder='Enter Your Email'
       />
         {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
      </div>
      <Button type='submit' disabled={!formik.dirty}>Subscribe</Button>

    </form>
   </section>
  )
}

export default NewsLetter