import React, { useState } from 'react';
import axios from 'axios';
import "./Partnersignup.css"
import ReactDOM from 'react-dom';
const Partnersignup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [ph, setPh] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/partners/signup', {
        name,
        password,
        email,
        address,
        ph
      });

      const { default: Signin } = await import('./Signin');
      const rootElement = document.getElementById('root');
      ReactDOM.render(<Signin />, rootElement);
      console.log(response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='partnersignup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className='partner-input'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
        </label>
        <label className='partner-input'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
          <input type="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' required/>
        </label>
        <label className='partner-input'>
          <input type="ph" value={ph} onChange={(e) => setPh(e.target.value)} placeholder='Phone' required/>
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

export default Partnersignup;
