import React, { useState } from 'react';
import axios from 'axios';
import "./Volunteersignup.css"
import ReactDOM from 'react-dom';
const VolunteerSignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [ph, setPh] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [skills, setSkills] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/volunteers/signup', {
        name,
        password,
        email,
        address,
        ph,
        age,
        dob,
        skills
      });
      console.log(response.data);
      const { default: Signin } = await import('./Signin');
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Signin />, rootElement);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='volunteersignup' >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className='volunteer-input' >
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
        </label>
        <label className='volunteer-input' >
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
          <input type="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' required/>
        </label>
        <label className='volunteer-input' >
          <input type="ph" value={ph} onChange={(e) => setPh(e.target.value)} placeholder='Phone' required/>
          <input type="age" value={age} onChange={(e) => setAge(e.target.value)}placeholder='Age' required />
        </label>
        <label className='volunteer-input' >
          <input type="dob" value={dob} onChange={(e) => setDob(e.target.value)} placeholder='Date Of Birth' required />
          <input type="skills" value={skills} onChange={(e) => setSkills(e.target.value)}placeholder='Skills' required /> 
        </label>
        <button type="submit">Sign Up</button>
        <div className="volunteer-existing">
          <a href="/Signin">Already existing account?</a>
          <a href="/Signin">Sign in</a>
          </div>
      </form>
    </div>
  );
};

export default VolunteerSignup;
