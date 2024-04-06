import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container } from './Carousel.Styled';
import { useTheme, useMediaQuery } from '@mui/material';
import { TCarouselProps } from '../../../types/types';

export default function Carousel({ content }: TCarouselProps) {
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
                {content.map((i: { url: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <img src={i.url} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};