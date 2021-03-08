import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [person, setPerson] = useState({
    password: "",
    passphrase: "",
    username: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(
       person.password,
       person.passphrase,
       person.username,
       person.title
     );
    setPerson({
    password: "",
    passphrase: "",
    username: "",
    title: "",
    })
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <div className="login-box">
        <h2>Password Manager</h2>
        <form onSubmit={handleChange}>
          <div className="user-box">
            <input
              type="text"
              name='username'
              value={person.username}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name='passphrase'
              value={person.passphrase}
              onChange={handleChange}
            />
            <label>Passphrase</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name='title'
              value={person.title}
              onChange={handleChange}
            />
            <label>Platform</label>
          </div>
          <a onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};
export default Form;
