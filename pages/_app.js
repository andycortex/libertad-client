import Navbar from '../components/Navbar'
import '../public/scss/app.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context'
export default function MyApp({ Component, pageProps }) {
    return (
      <Provider>
        <ToastContainer position='top-right'/>
        <Navbar/>
        <Component {...pageProps} />
      </Provider>
    ) 
  }