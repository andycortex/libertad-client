import Header from '../components/Header'
import '../public/styles/app.css'
import '../public/styles/styles.css'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Header/>
        <Component {...pageProps} />
      </>
    ) 
  }