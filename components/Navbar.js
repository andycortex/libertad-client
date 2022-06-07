import Link from 'next/link'
import Image from 'next/image'
import trazo from '../public/image/trazo.png'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useReducer, useState } from 'react';
import Login from './Login';
import Register from './Register';
const initialState = {show: false};

function reducer(state,action) {
  switch (action.type) {
    case 'LOGIN':
      return {show: false};
    case 'REGISTER':
      return {show: true };
    default: throw new Error(`Unknown action ${action.type}`);
  }
}
const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const [toogle, setToogle] = useState(false)
  const [form, setForm] = useState(false)
    return (
     <>
        <div className="header">
          <Link href="/">
            <a className='logo'>
            <Image
              src={trazo}
              alt='logo'
              width='48'
              height='48'
            />
              <p>libertad</p>
            </a>
          </Link>
          <nav className={toogle ? "navbar active" : "navbar "}>
            <CloseIcon className='close-nav' onClick={() => setToogle(!toogle)}/>
            <Link href='/'><a className='nav-link'>Inicio</a></Link>
            <Link href='/about'><a className='nav-link'>Nosotros</a></Link>
            <Link href='/courses'><a className='nav-link'>Cursos</a></Link>
            <Link href='/contact'><a className='nav-link'>Contact</a></Link>
          </nav>
          <div className='icons'>
            <AccountCircleSharpIcon className='icons-users' onClick={() => {setForm(!form)}}/>
            <MenuSharpIcon id='menu-btn'  className='icons-users' onClick={() => setToogle(!toogle)}/>
          </div>
        </div>
        <div className={form ? "account-form active-form" : "account-form "}>  {/* active-from */}
        <CloseIcon className='close-account' onClick={() => {setForm(!form)}}/>
        <div className='buttons'>
          <button 
            className={ state.show ? 'btn login-btn ' : 'btn login-btn active' }
            onClick={() =>dispatch({type: 'LOGIN'})}
            >
              Ingresar
          </button>
          <button
            className={ state.show ? 'btn register-btn active' : 'btn register-btn ' }
            onClick={() =>dispatch({type: 'REGISTER'})}
            >
              Registrar
          </button>
          {
             state.show ? <Register/> : <Login/>
          }
        </div>
      </div>
     </>
      )
  
}

export default Navbar;