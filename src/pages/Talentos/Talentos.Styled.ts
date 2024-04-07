import styled from "styled-components";

export const Container = styled.div<{modalOpen: boolean}>`
  background-color: var(--bg-home);

  > :nth-child(1) {
    filter: ${(props) => (props.modalOpen ? "blur(5px)" : "none")};
    pointer-events: ${(props) => (props.modalOpen ? "none" : "inherit")};
    user-select: ${(props) => (props.modalOpen ? "none" : "inherit")};
  }

  & .modal {
    background-color: var(--bg-home);
    min-height: 350px;
    width: 600px;
    transform: translate(50%, -50%);
    position: fixed;
    top: 50%;
    right: 50%;
    padding: 20px;
    border-radius: var(--border-radius-sm);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    z-index: 9;

    & .modal-content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .close-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        > .close {
          cursor: pointer;
          color: var(--vermelho);
          width: 30px;
          height: 30px;

          &:hover {
            color: var(--vermelho-hover);
          }
        }
      }

      > .text-content {
        width: 100%;
        padding: 20px;

        > h2 {
          text-align: center;
          margin-block: 10px;

          > span {
            color: var(--font-color-secondary);
          }
        }

        & .texts {
          > p {
            margin-block: 15px;
            text-align: justify;
            font-weight: 500;
          }

          > p:last-child {
            text-align: center;
            font-weight: 600;
            margin-bottom: 0;
          }
        }
      }

      > .confirm-btn {
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        background-color: var(--bg-section-claro);
        color: var(--btn-font-color);
        border-radius: var(--border-radius-sm);
        transition: var(--transition);

        &:hover {
          transition: var(--transition);
          background-color: var(--bg-section-escuro);
        }
      }
    }
  }

  @media (max-width: 620px) {
    & .modal {
      width: 90%;
    }
  }

  @media (max-width: 400px) {
    & .modal {
      width: 95%;
    }
  }

  @media (max-width: 400px) and (max-height: 600px) {
    & .modal {
      width: 95%;
      height: 98%;

      & .modal-content {
        > .text-content {
          padding: 0;

          & .texts {
            height: 350px;
            padding: 5px;
            overflow-y: scroll;

            > p:last-child {
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
`;
