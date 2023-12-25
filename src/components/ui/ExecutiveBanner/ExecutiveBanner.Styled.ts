import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azul-escuro);
  border-top-left-radius: 50%;
  border-bottom-right-radius: 20%;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 500px;
  height: 500px;

  & img {
    width: 500px;
    height: 500px;
    user-select: none;
    border-radius: var(--border-radius-md);
  }

  @media (max-width: 550px) {
    width: 400px;
    height: 400px;

    & img {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 420px) {
    width: 320px;
    height: 320px;

    & img {
      width: 320px;
      height: 320px;
    }
  }

  @media (max-width: 350px) {
    width: 300px;
    height: 300px;

    & img {
      width: 300px;
      height: 300px;
    }
  }
`;