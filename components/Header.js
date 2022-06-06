import Link from "next/link"
import Image from 'next/image'
import trazo from '../public/image/trazo.png'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
// import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
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
            libertad
          </a>
        </Link>
        <nav className="navbar ">
          {/* <CloseIcon className='close-nav'/> */}
          <Link href='/'><a className='nav-link'>Inicio</a></Link>
          <Link href='/about'><a className='nav-link'>Nosotros</a></Link>
          <Link href='/courses'><a className='nav-link'>Cursos</a></Link>
          <Link href='/contact'><a className='nav-link'>Contact</a></Link>
        </nav>
        <div className='icons'>
          <AccountCircleSharpIcon className='icons-users' />
          <MenuSharpIcon id='menu-btn' className='icons-users'/>
        </div>
      </div>
      )
  
}

export default Header