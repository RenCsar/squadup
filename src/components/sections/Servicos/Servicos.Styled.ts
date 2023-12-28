import styled from "styled-components";
import {
  flexCenter,
  interactionOff,
  sectionBase,
} from "../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  background-color: var(--bg-section-escuro);
  min-height: calc(100vh + 70px + 80px + 129px);
  width: 100%;

  & .container-geral {
    padding-inline: var(--padding-lateral);
    height: 100%;
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    margin-top: 70px; 

    & .text-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: var(--font-color-primary);
      text-align: center;

      & h2 {
      margin-top: 80px;
      color: var(--font-color-primary);
      font-size: 35px;
      text-align: center;
      }
    }

    & h3 {
      margin-top: 20px;
      color: var(--font-color-primary);
      font-size: 30px;
      text-align: center;
    }

    & .card-container {
      display: flex;
      margin-top: 30px;
      gap: 20px;
      justify-content: center;
      width: 100%;

      .swiper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .swiper-slide {
          ${interactionOff}
          ${flexCenter}
        }
      }
    }
  }

  @media (max-width: 500px) {
    min-height: calc(100vh + 90px + 80px + 200px);
    .container-geral {
      margin-top: 90px;
    }
  }
  
  @media (max-width: 450px) {
    padding-inline: var(--padding-lateral-mobile);
    .container-geral {
      padding-inline: 0;
      & .text-container {
        width: 95%;
      }
    }
  }
  
  @media (max-width: 350px) {
    min-height: calc(100vh + 110px + 80px + 200px);
    .container-geral {
      margin-top: 110px;
      & h2 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 330px) {
    min-height: calc(100vh + 110px + 130px + 300px);
    .container-geral {
      & h2 {
        font-size: 28px;
      }
    }
  }
`;