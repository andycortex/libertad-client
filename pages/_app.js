import Navbar from '../components/Navbar'
import '../public/scss/app.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <ToastContainer position='top-right'/>
        <Navbar/>
        <Component {...pageProps} />
      </>
    ) 
  }