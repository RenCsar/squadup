import { Swiper, SwiperSlide } from 'swiper/react';
import marcas from '../../../utils/marcas.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { Container } from './Carousel.Styled';

export default function Carousel() {
    return (
        <Container>
            <Swiper
                className="mySwiper"
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={5}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                draggable={false}
            >
                {marcas.map((i) => (
                    <SwiperSlide>
                        <img src={i.url} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};