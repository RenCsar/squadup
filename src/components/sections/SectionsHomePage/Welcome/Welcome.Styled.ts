import styled from "styled-components";
import { flexCenter } from "../../../../utils/globalStyles";

export const Container = styled.section`
  background-color: var(--bg-section-claro);
  min-height: calc(100vh - var(--header-height));
  height: 100%;
  width: 100%;

  & .container-geral {
    ${flexCenter}
    justify-content: space-around;
    min-height: calc(100vh - var(--header-height));
    height: 100%;
    width: 100%;
    padding-inline: var(--padding-lateral);
    gap: 50px;
    color: var(--font-color-primary);

    & .col-1 {
      ${flexCenter}
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      width: 400px;
      gap: 20px;

      & .text-container {
        gap: 20px;
        ${flexCenter}
        flex-direction: column;
        width: 100%;
        text-align: center;

        & .txt-1 {
          text-align: justify;
        }

        & h2 {
          font-size: 30px;
        }

        & p {
          font-size: 19px;
        }
      }

      & .btn-container {
        width: 100%;
        ${flexCenter}
      }
    }
  }

  @media (max-width: 1030px) {
    & .col-2 {
      display: none;
    }
  }

  @media (max-width: 450px) {
    & .container-geral {
      padding-inline: var(--padding-lateral-mobile);
    }
  }

  @media (max-width: 380px) {
    & .container-geral {
      & .col-1 {
        & .text-container {
          & h2 {
            font-size: 25px;
          }

          & p {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media (max-width: 350px) {
    & .container-geral {
      & .col-1 {
        & .text-container {
          & h2 {
            font-size: 20px;
          }

          & p {
            font-size: 15px;
          }
        }
      }
    }
  }
`;