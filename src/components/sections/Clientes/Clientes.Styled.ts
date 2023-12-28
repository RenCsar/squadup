import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  ${flexCenter}
  background-color: var(--bg-body);
  width: 100%;
  padding-block: 75px;
  padding-bottom: 120px;

  & .container-geral {
    padding-inline: var(--padding-lateral);
    height: 100%;
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    gap: 50px;
    position: relative;

    & .text-container {
      width: 70%;
      text-align: center;

      h2 {
        font-size: 35px;
        font-weight: 500;
      }
    }

    & .carousel-container-geral {
      width: 100%;
    }

    & .depoimento {
      position: absolute;
      z-index: 2;
      top: 330px;
      background-color: var(--bg-section-claro);
      width: 700px;
      height: 200px;
      border-top-left-radius: 2px;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 150px;
      border-bottom-left-radius: 100px;
      padding: 20px 50px;
      color: var(--font-color-primary);
      display: flex;
      gap: 20px;

      & img {
        width: 50px;
        height: 50px;
      }

      & .text-depoimento {
        width: 450px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & .empresa-depoimento {
          display: flex;
          align-items: center;
          gap: 10px;

          & img {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }

  @media (max-width: 1050px) {
    & .container-geral {
      & .text-container {
        width: 90%;
      }
    }
  }

  @media (max-width: 900px) {
    padding-inline: var(--padding-lateral-mobile);

    & .container-geral {
      & .depoimento {
        width: 80%;
        height: 220px;
      }
    }
  }

  @media (max-width: 815px) {
    & .container-geral {
      & .text-container {
        width: 98%;
      }
      & .depoimento {
        top: 390px;
      }
    }
  }

  @media (max-width: 600px) {
    & .container-geral {
      padding-inline: 0px;

      & .text-container {
        width: 100%;
      }

      & .depoimento {
        width: 90%;
        height: auto;

        & img {
          width: 40px !important;
          height: 40px !important;
        }
      }
    }
  }

  @media (max-width: 450px) {
    & .container-geral {
      & .text-container {
        & h2 {
          font-size: 33px !important;
        }
      }

      & .depoimento {
        width: 100%;
        height: auto;
        padding: 20px 40px;
      }
    }
  }

  @media (max-width: 400px) {
    & .container-geral {
      & .text-container {
        & h2 {
          font-size: 31px !important;
        }
      }

      & .depoimento {
        padding: 20px 20px;
      }
    }
  }

  @media (max-width: 350px) {
    & .container-geral {
      & .text-container {
        & h2 {
          font-size: 28px !important;
        }
      }
    }
  }
`;