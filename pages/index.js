import React from 'react'
import Link from 'next/link'
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
    )
  }
  
  export default Home