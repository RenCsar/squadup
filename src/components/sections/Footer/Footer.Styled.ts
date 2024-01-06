import styled from "styled-components";
import { sectionBase } from "../../../utils/globalStyledComponents";

export const Container = styled.footer`
  ${sectionBase}
  background-color: var(--bg-footer);
  min-height: 100vh;
  width: 100%;
  color: var(--font-color-primary);

  & .container-geral {
    padding-inline: var(--padding-lateral);
    padding-block: 30px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .first-section {
      display: flex;
      flex-direction: column;
      gap: 25px;

      & .img-container {
        & img {
          width: 170px;
        }
      }

      & .content {
        display: flex;
        justify-content: space-between;        

        & .text-container {
          width: 400px;
          text-align: justify;

          & span {
            font-weight: bold;
            color: var(--font-color-text);
          }
        }

        & .outsourcing, & .squadup {
          display: flex;
          flex-direction: column;
          gap: 5px;

          & ul {
            & li {
              & a {
                transition: var(--transition);
                &:hover {
                  transition: var(--transition);
                  color: var(--font-color-text);
                }
              }
            }
          }
        }
        
        & .gptw {
          & img {
            width: 80px;
          }
        }
      }

      & .last-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    & .second-section {
      padding-block: 30px;
      border-top: 1px solid var(--bg-border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;

      & img {
        width: 80px;
        height: 40.88px;
      }
    }
  }
`;