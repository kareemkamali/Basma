import React from 'react'
import Title from '../../shared/UiElment/Title/Title';
import classes from './ContactUs.module.css';
import home from '../../assets/Images/form-house.svg';
import phone from '../../assets/Images/form-phone.svg';
import email from '../../assets/Images/form-mail.svg';
import Button from '../../shared/Button/Button';
import { useFormik } from 'formik';
import {RiSendPlaneFill} from 'react-icons/ri'
const ContactUs = () => {
// I can use The React Hooks but For time Reason we can use the famous Library (Formik)


    const validate = values => {
        const errors = {};  
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.message || values.message.length < 20) {
            errors.message = 'Required or Must be 20 Characters or less';
            console.log(values.message.length);
          }

          if (!values.subject) {
            errors.subject = 'Required';
          }
      
        return errors;
      };
      
      const formik = useFormik({
        initialValues: {
          email: '',
          name:'',
          subject:'',
          message:''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
 <>
  <section className={classes.background}>
 <Title
 title='Stay Tuned'
 desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero animi ullam, reiciendis aliquid facilis ut amet debitis voluptates autem facere excepturi necessitatibus veniam fugit nam hic aliquam deleniti quis.'
 hr={true}
 />

    <div className={classes.content}>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio iusto dignissimos architecto cumque asperiores doloremque. Dolores quia minima magnam alias modi ducimus temporibus. Illum reprehenderit temporibus quidem cupiditate nostrum.
</p>
<div className={classes.contact_info}>
    <img src={home} alt='Home'></img>
    <p>Vestibulm nulla libero,canvallis,tincidunt suscipit diam,DC 2022</p>
</div>
<div className={classes.contact_info}>
    <img src={phone} alt='Home'></img>
    <p>+1230 456 789-012 345 6789</p>
</div>
<div className={classes.contact_info}>
    <img src={email} alt='Home'></img>
    <p>exampledomain@domain.com</p>
</div>
    </div>
    <form className={classes.form}  onSubmit={formik.handleSubmit}>
      <div className={`${classes.inputs} ${formik.errors.name?classes.inputs_error:''}`} >
      <input 
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
         placeholder='Name'
       />
         {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
      </div>


      <div className={`${classes.inputs} ${formik.errors.email?classes.inputs_error:''}`} >
      <input 
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         placeholder=' Email'
       />
         {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
      </div>


      <div className={`${classes.inputs} ${formik.errors.subject?classes.inputs_error:''}`} >
      <input 
         id="subject"
         name="subject"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.subject}
         placeholder='Subject'
       />
         {formik.touched.subject && formik.errors.subject ? (
         <div>{formik.errors.subject}</div>
       ) : null}
      </div>


      <div className={`${classes.inputs} ${formik.errors.message?classes.inputs_error:''}`} >
      <textarea 
         id="message"
         name="message"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.message}
         placeholder='Message'
       />
         {formik.touched.message && formik.errors.message ? (
         <div>{formik.errors.message}</div>
       ) : null}
      </div>
      <Button type='submit' disabled={!(formik.isValid && formik.dirty)}><RiSendPlaneFill  size={'20px'}/>Send Message</Button>

    </form>

 </section>
 
 </>

  )
}

export default ContactUs