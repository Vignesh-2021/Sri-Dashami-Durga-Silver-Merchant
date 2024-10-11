import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Loginpage.css'
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../../../redux/features/auth/authApi';
import { setUser } from '../../../redux/features/auth/authSlice';

const Loginpage = () => {

  const [message,setMessage] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


const dispatch = useDispatch();
const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()
const navigate = useNavigate()

//handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const data ={
    email,password
  }

  try {
    const response = await loginUser(data).unwrap();
    console.log(response);
    const {token,user} = response;
    dispatch(setUser({user}))
    navigate("/")
  } catch (error) {
    setMessage("Please provide a valid email and password")
  }

  }
  return (
    <section className='login'>
        <div className='login_section'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='login_form'>
                <input type='email' name='email' id='email' placeholder='Email..' required className='login_email'  onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' name='password' id='password' placeholder='Password..' required   className='login_pass'  onChange={(e) => setPassword(e.target.value)}/>
                {
                  message && <p className=''>{message}</p>
                }
                <button type='submit' className='login_btn'>Login</button>
            </form>
            <p className='login_txt'>Don't have an account? <Link to="/SignUp">Sign Up</Link> here.</p>
        </div>
    </section>
  )
}

export default Loginpage