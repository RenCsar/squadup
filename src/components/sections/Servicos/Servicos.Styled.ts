import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  background-color: var(--bg-section-escuro);
  min-height: calc(100vh + 150px);
  width: 100%;

  & .container-geral {
    padding-inline: var(--padding-lateral);
    height: 100%;
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    margin-top: 80px;

    & h2 {
      margin-top: 70px;
      color: var(--font-color-primary);
      font-size: 35px;
    }

    & .card-container {
      display: flex;
      margin-top: 30px;
      gap: 20px;
      justify-content: center;
      width: 100%;
    }
  }
`;