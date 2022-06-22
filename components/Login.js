import React, { useState, useContext, useEffect } from 'react'
import Link from "next/link"
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import { Context } from '../context';
import { useRouter } from 'next/router';


const Login = () => {
  const [email, setEmail] = useState('andrea@email.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  // state
  const { state, dispatch } = useContext(Context);

  // router
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const {data} = await axios.post(`/api/login`, {
        email,
        password,
      })
      // console.log('LOGIN RESPONSE', data);
      dispatch({
        type: 'LOGIN',
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem('user', JSON.stringify(data));
      // redirect to login page
      router.push('/');
      // setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  }
  return (
      <form className='login-form active' onSubmit={handleSubmit}>
          <h3>INGRESAR</h3>
          <input 
            type='email' 
            placeholder='Introduzca su correo'
            className='box'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
          <input 
            type='password' 
            placeholder='Introduzca su contraseña'
            className='box'
            value={password}
            autoComplete='false'
            onChange={ (e) => setPassword(e.target.value)}
            required
          />
          <div className='flex'>
            <input type='checkbox' name='remember' id='remember-me'/>
            <label htmlFor='remember-me'>Recordarme</label>
            <Link href='/login'><a className='forgot-password'>Olvide Contraseña</a></Link>
          </div>
          {loading ?  
            <LoadingButton className='btn' loading loadingIndicator="Loading..." variant="contained"> Ingresar</LoadingButton> 
            : 
            <button type='submit' className='btn' >Ingresar</button> }
            
      </form>
  )
}

export default Login