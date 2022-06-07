import React from 'react'
import Link from "next/link"

const Login = () => {
  return (
      <form className='login-form active'>
          <h3>INGRESAR</h3>
          <input type='text' placeholder='Enter your email'className='box'/>
          <input type='password' placeholder='Enter your password'className='box'/>
          <div className='flex'>
            <input type='checkbox' name='remember' id='remember-me'/>
            <label htmlFor='remember-me'>Recordarme</label>
            <Link href='/login'><a className='forgot-password'>Olvide Contraseña</a></Link>
          </div>
          <input type='submit' value='Ingresar' className='btn'/>
      </form>
  )
}

export default Login