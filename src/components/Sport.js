import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Sport.module.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function Sport() {
    return (
        <>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29vleJXcv1VtJSYj_pLfzZIKKtHuh8yHFHw&s" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFluOgPAvuoyRGZBUNWVtBRkFufAhg4he3w&s" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_iJQTxyqjdUSCTkXAHlOa-qaf0XfRJXvog&s" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
