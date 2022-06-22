import React from 'react';
import Subject from '../components/Subject';
import Review from '../components/Review';
import Footer from '../components/Footer';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation } from 'swiper';

import slideImage1 from '../public/image/home-slide-2.jpg';
import slideImage2 from '../public/image/home-slide-1.jpg';
import slideImage3 from '../public/image/home-slide-3.jpg'
import Teacher from '../components/Teacher';




function Home() {
  return (
      <>
        <section className='home'>
            <div className='home-slider'>
                <div className='w'>
                    <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    
                    modules={[EffectFade, Navigation]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <section className='slide' style={{ 
                              backgroundImage: `url(${slideImage1.src})`}}>
                                <div className='content'>
                                  <h3>the best Review you will find find here!</h3>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                                  <Link href="/"><a className='btn'>get started</a></Link>
                                </div>
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                              <section className='slide' style={{ backgroundImage: `url(${slideImage2.src})`}}>
                                <div className='content'>
                                  <h3>the best Review you will find find here!</h3>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                                  <Link href="/"><a className='btn'>get started</a></Link>
                                </div>
                              </section>
                            </SwiperSlide>
                            <SwiperSlide>
                                <section className='slide' style={{ backgroundImage: `url(${slideImage3.src})`}}>
                                  <div className='content'>
                                    <h3>the best Review you will find find here!</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                                    <Link href="/"><a className='btn'>get started</a></Link>
                                  </div>
                                </section>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        <section className='subjects'>
          <h1 className='heading-tile'>Nuestros Cursos Populares</h1>
            <div className='box-container'>
              <Subject 
                img='image/cash.png'
                alt='Subject description'
                title='Ventas'
                modules='12 videos'
              />
              <Subject 
                img='image/marketing-1.png'
                alt='Subject description'
                title='Marketing'
                modules='6 videos'
              />
              <Subject 
                img='image/velas-japonesas.png'
                alt='Subject description'
                title='Trading'
                modules='8 videos'
              />
              <Subject 
                img='image/publicidad-1.png'
                alt='Subject description'
                title='Publicidad'
                modules='12 videos'
              />
              <Subject 
                img='image/ventas-1.png'
                alt='Subject description'
                title='Negocios'
                modules='6 videos'
              />
              <Subject 
                img='image/carrito-compras.png'
                alt='Subject description'
                title='E-commerce'
                modules='8 videos'
              />
            </div>
          </section>
          <Teacher />
          <Review/>
        <Footer/>
      </>
      
    )
  }
  
  export default Home