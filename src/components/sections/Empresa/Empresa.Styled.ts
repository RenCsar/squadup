import styled from "styled-components";

export const Container = styled.div`
  & img {
    width: 100vw;
    height: 100%;
  }

  & .container-geral {
    background: rgba(0, 0, 0, 0.4);
    padding-inline: calc(var(--padding-lateral) + 40px);
    padding-block: 50px;
    height: 450px;
    color: var(--font-color-primary);

    & .text-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 600px;

      & h1 {
        font-size: 35px;
      }
    }
  }
`;
