import { useReducer, useState, useContext } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import trazo from '../public/image/trazo.png'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login';
import Register from './Register';
import { Context } from '../context'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

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
  const [stateToogle, dispatchToogle] = useReducer(reducer, initialState);
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  

  const router = useRouter();
  
  const [toogle, setToogle] = useState(false)
  const [form, setForm] = useState(false)

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    const { data } = await axios.get('/api/logout');
    toast.success(data.message);
    router.push('/');
  };

    return (
     <>
        <div className='header'>
          <Link href='/'>
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
            {
              user !== null ? (
                <div className='logout-form'>
                  <Link href='/user'>
                    <a className='icons-users'>
                      <AccountCircleSharpIcon className='profile-icon'/> 
                      { user && user.name }
                    </a>
                  </Link>
                  <LogoutIcon className='icons-users' onClick={logout}/>
                </div>
              ) : (
                <AccountCircleSharpIcon className='icons-users' onClick={() => {setForm(!form)}}/>
              )
            }
            <MenuSharpIcon id='menu-btn'  className='icons-users' onClick={() => setToogle(!toogle)}/>
          </div>
        </div>
        {
          user === null && (
            <div className={form ? "account-form active-form" : "account-form "}>  {/* active-from */}
              <CloseIcon className='close-account' onClick={() => {setForm(!form)}}/>
              <div className='buttons'>
                <button 
                  className={ stateToogle.show ? 'btn login-btn ' : 'btn login-btn active' }
                  onClick={() =>dispatchToogle({type: 'LOGIN'})}
                >
                  Ingresar
                </button>
                <button
                  className={ stateToogle.show ? 'btn register-btn active' : 'btn register-btn ' }
                  onClick={() =>dispatchToogle({type: 'REGISTER'})}
                >
                  Registrar
                </button>
                
                  {
                    stateToogle.show ? <Register/> : <Login/>     
                  }
              </div>
          </div>
      )}
     </>
      )
  
}

export default Navbar;