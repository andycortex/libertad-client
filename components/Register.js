import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';


const Register = () => {
  const [name, setName] = useState('Gustavo');
  const [email, setEmail] = useState('gustavo@email.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      const {data} = await axios.post(`/api/register`, {
        name,
        email,
        password,
      })
      toast.success('Registro existoso. Por favor ingresa al sistema')
      setLoading(false);
      
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
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
            type='email' 
            placeholder='Introduzca su correo electronico' 
            className='box'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            required
          />
          <input 
            type='password' 
            placeholder='Introduzca su contraseña '
            autoComplete='false'
            className='box'
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            required
          />
          {loading ?  
            <LoadingButton className='btn' loading loadingIndicator="Loading..." variant="contained"> Ingresar</LoadingButton> 
            : 
            <button type='submit' className='btn' >Ingresar</button> }
            
      </form>
  )
}

export default Register