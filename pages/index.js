import React from 'react';
import Subject from '../components/Subject';
import Review from '../components/Review';
import Footer from '../components/Footer';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation } from 'swiper';

import slideImage1 from '../public/image/home-slide-2.png';
import slideImage2 from '../public/image/home-slide-1.jpg';
import slideImage3 from '../public/image/home-slide-3.jpg'




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
                                {/* <div className='content'>
                                <Link href="/"><a className='btn'>Empieza ya!!!</a></Link>
                                </div> */}
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                                <section className='slide' style={{ backgroundImage: `url(${slideImage2.src})`}}>
                                    {/* <div className='content'>
                                    <Link href="/"><a className='btn'>Empieza ya!!!</a></Link>
                                    </div> */}
                                </section>
                            </SwiperSlide>
                            <SwiperSlide>
                                <section className='slide' style={{ backgroundImage: `url(${slideImage3.src})`}}>
                                    <div className='content'>
                                        {/* <div className='content'>
                                              <Link href="/"><a className='btn'>Empieza ya!!!</a></Link>
                                          </div> */}
                                    </div>
                                </section>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        <div className='background-blue'>
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
          {/* <Teacher/> */}
          <Review/>
        </div>
        <Footer/>
      </>
      
    )
  }
  
  export default Home