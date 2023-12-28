import { Swiper, SwiperSlide } from 'swiper/react';
import marcas from '../../../utils/marcas.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { Container } from './Carousel.Styled';
import { useTheme, useMediaQuery } from '@mui/material';

export default function Carousel() {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container>
            <Swiper
                className="mySwiper"
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={smDown ? 1 : mdDown ? 3 : 5}
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
                {marcas.map((i, index) => (
                    <SwiperSlide key={index}>
                        <img src={i.url} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};