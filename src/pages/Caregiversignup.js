import React, { useState } from 'react';
import axios from 'axios';
import "./Caregiversignup.css"
import ReactDOM from 'react-dom';
const Caregiversignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [ph, setPh] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/caregivers/signup', {
        name,
        password,
        ph,
        email,
        dob,
        age,
        address,
        experience

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
    <div className='caregiversignup' >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className='caregiver-input' >
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'required/>
        </label>
        <label className='caregiver-input' >
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Email' required/>
          <input type="dob" value={dob} onChange={(e) => setDob(e.target.value)}placeholder='Date Of Birth' required/>
        </label>
        <label className='caregiver-input' >
          <input type="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder=' Age' required/>
          <input type="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' required/>
        </label>
        <label className='caregiver-input' >
          <input type="phone" value={ph} onChange={(e) => setPh(e.target.value)}placeholder='Phone' required/>
          <input type="experience" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Experience' required/>
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <div className="volunteer-existing">
           <a href="/Signin">Already existing account?</a>
           <a href="/Signin">Sign in</a>
          </div>
      </form>
    </div>
  );
};

export default Caregiversignup;
