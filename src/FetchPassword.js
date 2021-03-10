import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import './FetchPassword.css'
import { useForm } from 'react-hook-form'
import DisplayPassword from "./DisplayPassword";

const FetchPassword = () => {

  const { register, handleSubmit} = useForm();

  const [fetchComplete, setFetchComplete] = useState(false)
  const [data, setData] = useState('')

  const onSubmit = (data) => {
      const {passphrase, title} = data
     if (axios.get(`http://127.0.0.1:8000/api/retrieve/${passphrase}/${title}`).then(response =>
      setData(response.data)).then(error => console.log(error)))

      {
        setFetchComplete(true)
      }

  }
  return (
    <>
    {fetchComplete ? <DisplayPassword  passwordToDisplay={data.decrypted_password || data.response}/> :
      <div className="login-box">
        <h2>Fetch Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <a onClick={handleSubmit(onSubmit)} style={{marginLeft: '99px'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Fetch
          </a>
        </form>
      </div>
}
    </>
  )
}

export default FetchPassword