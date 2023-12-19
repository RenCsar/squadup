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
    /* ${flexCenter}
    justify-content: space-between; */
  }
`;