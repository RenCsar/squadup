import styled from "styled-components";
import {
  flexCenter,
  interactionOff,
} from "../../../utils/globalStyles";

export const Container = styled.section`
  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      ${interactionOff}
      ${flexCenter}
      text-align: center;
      font-size: 18px;
      background: transparent;

      img {
        width: 150px;
        height: 150px;
        display: block;
        object-fit: cover;
        ${interactionOff}
      }
    }
  }
`;