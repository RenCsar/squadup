import styled from "styled-components";

export const Container = styled.div`
  & img {
    width: 100vw;
    height: 100%;
  }

  & .container-geral {
    background: rgba(0, 0, 0, 0.5);
    padding-inline: calc(var(--padding-lateral) + 40px);
    padding-block: 50px;
    height: 500px;
    color: var(--font-color-primary);

    & .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      gap: 20px;
      width: 550px;
      font-weight: bold;

      & h1 {
        font-size: 35px;
      }
    }
  }

  @media (max-width: 1250px) {
    & .container-geral {
      height: 430px;
    }
  }

  @media (max-width: 1100px) {
    & img {
      width: 100vw;
      height: auto;
    }
    & .container-geral {
      min-height: 400px;
    }
  }

  @media (max-width: 650px) {
    & .container-geral {
      padding-inline: calc(var(--padding-lateral) + 40px);
      padding-block: 10px;
      & .text-container {
        width: 98%;
      }
    }
  }

  @media (max-width: 570px) {
    & img {
      height: 500px;
    }

    & .container-geral {
      padding-inline: var(--padding-lateral-mobile);
      width: 100%;
      height: 500px;
    }
  }
`;