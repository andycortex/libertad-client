import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState('Andrea');
  const [email, setEmail] = useState('andrea@email.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({name, email, password});
    try {
      const {data} = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      })
      // console.log('REGISTER RESPONSE', data);
      toast.dark('Registro existoso. Por favor ingresa al sistema')
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  return (
      <form className='register-form active ' onSubmit={handleSubmit}>
          <h3>REGISTRAR</h3>
          <input 
            type='text' 
            placeholder='Introduzca su nombre completo'
            className='box'
            value={name}
            onChange={ (e) => setName(e.target.value)}
            required
          />
          <input 
            type='text' 
            placeholder='Introduzca su correo electronico' 
            className='box'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            required
          />
          <input 
            type='password' 
            placeholder='Introduzca su contraseña '
            className='box'
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            required
          />
          <input 
            type='submit' 
            value='Registrar'
             className='btn'
          />
      </form>
  )
}

export default Register