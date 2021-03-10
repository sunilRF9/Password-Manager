import React, { useState } from 'react'
import './Form.css'
import FetchPassword from "./FetchPassword";

const Formsuccess = () => {

  const [gotopass, setGotopass] = useState(false)

  const getPassword = () => {
    setGotopass(true)
  }

    return (
        <div>
      {gotopass ? <FetchPassword /> : 
      <div className="login-box">
        <h2>Password Stored</h2>
        <form >
          <a href="" style={{textAlign: 'center', marginLeft: '90px'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Return
          </a>
          <a onClick={getPassword}style={{textAlign: 'center', marginLeft: '50px'}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get Password
          </a>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
}
        </div>
    )
}

export default Formsuccess
