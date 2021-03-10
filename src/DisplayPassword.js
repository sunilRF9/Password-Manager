import React from 'react'
import './Form.css'

const DisplayPassword = ({passwordToDisplay}) => {
    return (
        <div className="login-box">
        <h2>{passwordToDisplay}</h2>
        </div>
    )
}

export default DisplayPassword
