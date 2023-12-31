import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  background-color: var(--bg-body);
  min-height: 100vh;
  width: 100%;

  & .container-geral {
    padding-inline: var(--padding-lateral);
    height: 100%;
    width: 100%;
    margin-top: 20px;
    ${flexCenter};
    flex-direction: column;

    & h2 {
      color: var(--font-color-text);
      font-size: 35px;
      text-align: center;
      font-weight: 500;
    }

    & .tec-container {
      height: 100%;
      width: 100%;
      display: flex;
    }
  }
`;