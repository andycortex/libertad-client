import Link from "next/link"
import Image from 'next/image'
import trazo from '../public/image/trazo.png'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const Header = () => {
  const [toogle, setToogle] = useState(false)
    return (
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
          <Link href='/login'><a className='nav-link'>Ingresar</a></Link>
        </nav>
        <div className='icons'>
          <AccountCircleSharpIcon className='icons-users' />
          <MenuSharpIcon id='menu-btn'  className='icons-users' onClick={() => setToogle(!toogle)}/>
        </div>
      </div>
      )
  
}

export default Header