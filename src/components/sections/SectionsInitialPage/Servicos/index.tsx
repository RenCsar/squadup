import { Box } from "@mui/material";
import { Container } from "./Servicos.Styled";
import Projeto from './../../../../assets/projetos.svg';
import Web from './../../../../assets/web.svg';
import Design from './../../../../assets/design.svg';
import ServicesClients from "../../../ui/ServicesClients";
import Services from "../../../../utils/servicos.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Servicos = () => {
  const mdDown = useMediaQuery({
    query: '(max-width: 1140px)'
  });
  const smDown = useMediaQuery({
    query: '(max-width: 815px)'
  });

  const imagens: Record<string, string> = {
    projeto: Projeto,
    web: Web,
    design: Design
  }

  return (
    <Container>
      <Box className="container-geral" id="servicos">
        <Box className="text-container">
          <h2>Nossos Serviços</h2>
          <p>
            Trabalhamos com um time de profissionais especializados em cada fase do seu projeto, bem como melhores práticas para condução e desenvolvimento de um software ou aplicativo mobile. Conheça nossos profissionais, temos a equipe perfeita para seu negócio.
          </p>
        </Box>
        <h3>Modelos de Outsourcing de TI</h3>
        <Box className="card-container">
          <Swiper
            className="mySwiper"
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={smDown ? 1 : mdDown ? 2 : 3}
            loop={true}
            autoplay={!mdDown ? false : {
              delay: 2000,
            }}
            pagination={{
              clickable: mdDown ? true : false,
            }}
            navigation={false}
            draggable={mdDown ? true : false}
          >
            {Services.map((i) => (
              <SwiperSlide key={i.title}>
                <ServicesClients
                  title={i.title}
                  img={imagens[i.img]}
                  classStyle={i.classStyle}
                  items={i.items}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  )
}

export default Servicos;