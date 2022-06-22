import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Teacher = () => {
  return (
    <section className='teachers'>
        <h1 className='heading'>Nuestros Profesores</h1>
        <div className='teachers-slider'>
        <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide'>
                    <div className='image'>
                        <img src='image/teacher-1.png' alt=''/>
                        <div className='share'>
                            <Link href='/' ><FacebookIcon className='teacher-social-media'/></Link>
                            <Link href='/' ><InstagramIcon className='teacher-social-media'/></Link>
                            <Link href='/' ><TwitterIcon className='teacher-social-media'/></Link>
                        </div>
                    </div>
                    <div className='content'>
                        <h3>Ana Deo</h3>
                        <span>expert tutor</span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='image'>
                            <img src='image/teacher-2.png' alt=''/>
                            <div className='share'>
                                <Link href='/' ><FacebookIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><InstagramIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><TwitterIcon className='teacher-social-media'/></Link>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Ana Deo</h3>
                            <span>expert tutor</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='image'>
                            <img src='image/teacher-3.png' alt=''/>
                            <div className='share'>
                                <Link href='/'><FacebookIcon className='teacher-social-media'/></Link>
                                <Link href='/'><InstagramIcon className='teacher-social-media'/></Link>
                                <Link href='/'><TwitterIcon className='teacher-social-media'/></Link>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Ana Deo</h3>
                            <span>expert tutor</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='image'>
                            <img src='image/teacher-4.png' alt=''/>
                            <div className='share'>
                                <Link href='/' ><FacebookIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><InstagramIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><TwitterIcon className='teacher-social-media'/></Link>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Ana Deo</h3>
                            <span>expert tutor</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='image'>
                            <img src='image/teacher-5.png' alt=''/>
                            <div className='share'>
                                <Link href='/' ><FacebookIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><InstagramIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><TwitterIcon className='teacher-social-media'/></Link>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Ana Deo</h3>
                            <span>expert tutor</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <div className='image'>
                            <img src='image/teacher-6.png' alt=''/>
                            <div className='share'>
                                <Link href='/' ><FacebookIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><InstagramIcon className='teacher-social-media'/></Link>
                                <Link href='/' ><TwitterIcon className='teacher-social-media'/></Link>
                            </div>
                        </div>
                        <div className='content'>
                            <h3>Ana Deo</h3>
                            <span>expert tutor</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Teacher