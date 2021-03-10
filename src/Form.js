import React, {useState} from 'react'
import "./Form.css";
import { useForm } from 'react-hook-form'
import axios from "axios";


const Formsignup = ({submitForm}) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    console.log(data);
     axios.post('http://127.0.0.1:8000/api/', data).then(response =>
      console.log(response)).then(error => console.log(error)
        )
    setIsSubmitting(true)
    submitForm()
    reset()

  };
  console.log(isSubmitting);
  return (
    <>
      <div className="login-box">
        <h2>Password Manager</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="user-box">
            <input
              type="text"
              name='username'
              autoComplete='off'
              ref = {register}
            />
            <label>Username/Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name='passwd'
              autoComplete='off'
              ref={register({ required: true, minLength: 6 })}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name='passphrase'
              autoComplete='off'
              ref={register({ required: true, minLength: 6 })}
            />
            <label>Passphrase</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name='title'
              autoComplete='off'
              ref = {register}
            />
            <label>Platform</label>
          </div>
          <a style={{marginLeft: '90px'}} onClick={handleSubmit(onSubmit)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </>
  )
}

export default Formsignup
