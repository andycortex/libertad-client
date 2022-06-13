import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Review = () => {
  return (
    <section className='review'>
        <h1 className='heading-tile'>Comentarios de nuestros estudiantes</h1>
        <div className='reviews-slider'>
            <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-1.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-2.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-3.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-4.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-5.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img src='images/pic-6.png' alt=''/>
                        <h3>John Smith</h3>
                        <div className='starts'>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarBorderIcon className='star'/>
                            <StarHalfIcon className='star'/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Review