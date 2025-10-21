import React, { useRef } from 'react';
import Container from './Container';
import Slide_1 from './Slides/Slide_1';
import '../index.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Swiper} from 'swiper/react';
import Slide_2 from './Slides/Slide_2';
import Slide_3 from './Slides/Slide_3';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Container>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide> <Slide_1></Slide_1> </SwiperSlide>
                <SwiperSlide> <Slide_2></Slide_2> </SwiperSlide>
                <SwiperSlide> <Slide_3></Slide_3> </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </Container>
    );
};

export default Banner;