import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  padding: 30px 50px;
  background-color: var(--bg-section-claro);
  display: flex;
  color: var(--font-color-primary);
  flex-direction: column;
  gap: 20px;
  border-top-left-radius: 75px;
  border-bottom-right-radius: 75px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  & .card-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      font-weight: bold;
    }

    & .button-container {
      display: flex;
      gap: 10px;
    }
  }

  & .content {
    display: flex;
    width: 100%;
    gap: 20px;

    & .img-container {
      & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    & .text-container {
      font-weight: bold;
      font-size: 17px;

      & p + p {
        margin-top: 5px;
      }
    }
  }

  & .btn-hire {
    width: 100%;
    padding-inline: 20px;
  }

  @media (max-width: 550px) {
    border-top-left-radius: 55px;
    border-bottom-right-radius: 55px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 20px;
  }

  @media (max-width: 450px) {
    height: 330px;
    & .content {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 400px) {
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 10px;

    & .card-header {
      flex-direction: column;
      
      > p {
        word-wrap: break-word;
      }
      
      & .button-container {
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 350px) {
    & .content {
      & .text-container {
        font-size: 16px;
      }
    }
  }
`;