import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  min-height: 100vh;
  width: 100%;
  background-color: var(--azul-claro);
  color: var(--font-color-primary);

  & .container-geral {
    ${flexCenter}
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding-inline: var(--padding-lateral);
    gap: 20px;

    & .banner-header {
      height: 500px;
      ${flexCenter}
      align-items: flex-start;
      flex-direction: column;
      user-select: none;

      > p {
        font-size: 18px;
      }

      & img {
        width: 400px;
        height: auto;
      }

      & .text-container {
        margin-top: 30px;
        width: 440px;

        & .link-container {
          margin-top: 20px;
        }
      }
    }
  }

  @media (max-width: 1050px) {
    & .container-geral {
      flex-direction: column;
      padding-bottom: 20px;
      padding-inline: 0;
    }
  }

  @media (max-width: 500px) {
    padding-inline: var(--padding-lateral-mobile);
    & .container-geral {
      & .banner-header {
        & img {
          width: 300px;
        }

        & .text-container {
          margin-top: 40px;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 350px) {
    & .container-geral {
      & .banner-header {
        & img {
          width: 250px;
        }

        & .text-container {
          margin-top: 40px;
          width: 100%;
        }
      }
    }
  }
`;