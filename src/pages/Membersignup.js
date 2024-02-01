import React, { useState } from 'react';
import axios from 'axios';
import "./Membersignup.css"
import ReactDOM from 'react-dom';
const Membersignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/members/signup', {
        username,
        password,
        gender,
        email,
        dob,
        age
      });

      console.log(response.data);
      const { default: Signin } = await import('./Signin');
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Signin />, rootElement);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='membersignup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" className='member-input' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required/>
          <input type="email" className='member-input' value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Email' required/>
        </label>
        <label>
          <input type="password" className='member-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
          <input type="dob" className='member-input' value={dob} onChange={(e) => setDob(e.target.value)} placeholder='Date Of Birth' required/>
        </label>
        <label>
          <input type="age" className='member-input' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' required/>
        </label>
        <br />
        <label className='member-radio'>
          Gender:
          <input type="radio" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
              Female
         <input type="radio" value="Male" checked={gender === 'Male'} onChange={() => setGender('Male')} />
              Male
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

export default Membersignup;
