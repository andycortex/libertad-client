import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import  Link  from 'next/link';

const Footer = () => {
  return (
    <section className='footer'> 
        <div className='box-container'>
            <div className='box'>
                <h3>Libertad</h3>
                <p>Lorem Ipsum ipsum dolor sit amet, consectet, sit amet consectet</p>
                <div className='share'>
                    <Link href='/' ><FacebookIcon className='share-social-media'/></Link>
                    <Link href='/' ><InstagramIcon className='share-social-media'/></Link>
                    <Link href='/' ><WhatsAppIcon className='share-social-media'/></Link>
                </div>
            </div>
            <div className='box'>
                <h3>Quick Links</h3>
                <Link href='/'><a className='footer-link'>Inicio</a></Link>
                <Link href='/about'><a className='footer-link'>Nosotros</a></Link>
                <Link href='/courses'><a className='footer-link'>Cursos</a></Link>
                <Link href='/contact'><a className='footer-link'>Contact</a></Link>
            </div>
            <div className='box'>
                <h3>UseFul links</h3>
                <Link href='/'><a className='footer-useful'>Help Center</a></Link>
                <Link href='/'><a className='footer-useful'>Ask a Question</a></Link>
                <Link href='/'><a className='footer-useful'>Send a Message</a></Link>
                <Link href='/'><a className='footer-useful'>Private Policy</a></Link>
                <Link href='/'><a className='footer-useful'>Term of Use</a></Link>
            </div>
            <div className='box'>
                <h3>Newsletters</h3>
                <p>Suscription for latest updates</p>
                <form>
                    <input type='email' placeholder='Enter your email' className='email'/>
                    <input type='submit' value='Subcribe' className='btn'/>
                </form>
            </div>
        </div>
        <div className='credit'>created by Andrea Herrera all rights reserved</div>
    </section>
  )
}

export default Footer