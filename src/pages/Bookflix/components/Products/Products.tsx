import React from 'react'
import './Products.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@mui/material';
// Import Swiper styles
import "swiper/css";


function Products() {
    return <section className="products" id="products">
        <div className="products__container container grid">
            <div className="products__data" >
                <h1 className="products__title">New & <br />Trending</h1>
                <p className="products__description">Khám phá thế giới mới từ các tác giả</p>
                <div className="products__search">
                    <i className="ri-search-line products__search-icon"></i>
                    <input className='products__search-input' type="text" placeholder='Titles, author, or topics' name="search" id="search" />
                </div>
            </div>
            <div className='products__bookshelf'>
                {/* <div className="products__list">
                </div> */}
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='products__card grid'>
                            <div className='bookbox'>
                                <div className='products__book'>
                                    <img src="/book1.jpg" className='products__book-img' alt="" />
                                </div>
                            </div>
                            <div className='products__card-data'>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <h3 className='products__namebook'>abc</h3>
                                <p className='products__author'>LBL</p>
                                <a href="/bookflix/books" className="btn-read">Read now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='products__card grid'>
                            <div className='products__book'>
                                <img src="/book1.jpg" className='products__book-img' alt="" />
                            </div>
                            <div className='products__card-data'>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <h3 className='products__namebook'>abc</h3>
                                <p className='products__author'>LBL</p>
                                <a href="/bookflix/books" className="btn-read">Read now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='products__card grid'>
                            <div className='products__book'>
                                <img src="/book1.jpg" className='products__book-img' alt="" />
                            </div>
                            <div className='products__card-data'>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <h3 className='products__namebook'>abc</h3>
                                <p className='products__author'>LBL</p>
                                <a href="/bookflix/books" className="btn-read">Read now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    </section>
}

export default Products