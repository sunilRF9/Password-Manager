import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [person, setPerson] = useState({
    passwd: "",
    passphrase: "",
    username: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(
    //    person.passwd,
    //    person.passphrase,
    //    person.username,
    //    person.title
    //  );
    const data = {passwd: person.passwd, passphrase: person.passphrase, username: person.username, title: person.title}
     axios.post('http://127.0.0.1:8000/api/', data).then(response =>
      console.log(response)).then(error => console.log(error)
        )
    setPerson({
    passwd: "",
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
              autoComplete='off'
              value={person.username}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name='passwd'
              value={person.passwd}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
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
              autoComplete='off'
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
