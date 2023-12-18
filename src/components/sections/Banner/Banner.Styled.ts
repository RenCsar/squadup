import styled from "styled-components";

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.section`
  background-color: var(--azul-claro);
  min-height: 100vh;
  padding-top: var(--padding-top-header);
  padding-inline: var(--padding-lateral);
  color: var(--font-color-primary);
  width: 100%;

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
        height: 100px;
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
          height: 75px;
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
          height: 63px;
        }

        & .text-container {
          margin-top: 40px;
          width: 100%;
        }
      }
    }
  }
`;