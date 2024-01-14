import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  ${flexCenter}
  background-color: var(--bg-section-escuro);
  width: 100%;
  min-height: 100vh;

  & .container-geral {
    ${flexCenter};
    flex-direction: column;
    padding-inline: var(--padding-lateral);
    min-height: 100vh;
    width: 100%;
    gap: 50px;

    & .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--font-color-primary);
      gap: 10px;

      & h2 {
        font-size: 35px;
        text-align: center;
        font-weight: 500;

        & span {
          background: linear-gradient(
            135deg,
            #fff -100%,
            var(--azul-claro) 100%
          );
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      & p {
        font-size: 20px;
      }
    }

    & .carousel-container-geral {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    min-height: calc(100vh + 130px);
    padding-inline: var(--padding-lateral-mobile);
    .container-geral {
      /* margin-top: 90px; */
    }
  }

  @media (max-width: 450px) {
    .container-geral {
      padding-inline: 0;
      & .text-container {
        width: 95%;
      }
    }
  }

  @media (max-width: 350px) {
    min-height: calc(100vh + 200px);
    .container-geral {
      /* margin-top: 110px; */
      & h2 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 330px) {
    min-height: calc(100vh + 250px);
    .container-geral {
      & h2 {
        font-size: 28px;
      }
    }
  }
`;
