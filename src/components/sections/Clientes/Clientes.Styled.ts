import styled from "styled-components";
import { flexCenter, sectionBase } from "../../../utils/globalStyledComponents";

export const Container = styled.section`
  ${sectionBase}
  ${flexCenter}
  background-color: var(--bg-body);
  width: 100%;
  padding-block: 100px;

  & .container-geral {
    padding-inline: var(--padding-lateral);
    height: 100%;
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    gap: 50px;

    & .text-container {
      width: 70%;
      text-align: center;
      h2 {
        font-size: 35px;
        font-weight: 500;
      }
    }

    & .carousel-container-geral {
      width: 100%;
    }
  }
`;