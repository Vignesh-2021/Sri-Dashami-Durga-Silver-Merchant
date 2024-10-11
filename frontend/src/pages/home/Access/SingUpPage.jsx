import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../redux/features/auth/authApi';

const SingUpPage = () => {

    const [message,setMessage] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [registerUser, {isLoading}] = useRegisterUserMutation();
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
      e.preventDefault();
      const data ={
      username,email,password
    }

    try {
      await registerUser(data).unwrap();
      navigate("/login")
    } catch (error) {
      setMessage("Registration Failed")
    }

    }

  return (
    <section className='login'>
    <div className='login_section'>
        <h2>Please SignUp</h2>
        <form onSubmit={handleSignUp} className='login_form'>
        <input type='text' name='username' id='username' placeholder='Username..' required className='login_email'  onChange={(e) => setUsername(e.target.value)}/>
            <input type='email' name='email' id='email' placeholder='Email..' required className='login_email'  onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' name='password' id='password' placeholder='Password..' required   className='login_pass'  onChange={(e) => setPassword(e.target.value)}/>
            {
              message && <p className=''>{message}</p>
            }
            <button type='submit' className='login_btn'>SignUp</button>
        </form>
        <p className='login_txt'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
</section>
  )
}

export default SingUpPage