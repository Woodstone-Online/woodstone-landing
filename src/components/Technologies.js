import '../styles/Technologies.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const Technologies = () => (
    <div className="technologies-section">
        <a id="technologies" href="#technologies"> </a>
        <div className="wrapper">
            <div className="container">
                <div className="text-block">
                    <h2 className="section-title">Технологии от начала<br></br>и до конца</h2>
                    <p className="description">Woodstone Online объединяет в себе все, что нужно для старта загородной жизни — в режиме онлайн вы можете задать все желаемые параметры своего будущего дома, посмотрите на некоторые из них</p>
                </div>
                <div className="slider">
                    <Swiper
                        id="tech"
                        spaceBetween={10}
                        slidesPerView='auto'
                        pagination={{
                            el: '.switchers',
                            clickable: true,
                        }}
                    >
                        <SwiperSlide key={1}></SwiperSlide>
                        <SwiperSlide key={2}></SwiperSlide>
                        <SwiperSlide key={3}></SwiperSlide>
                    </Swiper>
                </div>
                <div className="switchers-container">
                    <div className="switchers">
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Technologies;
